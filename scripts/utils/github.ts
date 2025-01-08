import { extract } from "jsr:@quentinadam/zip";

/**
 * owner/repo/branch/...restOfPath
 */
export type RepoPath = `${string}/${string}/${string}`;

async function api(url: string, token?: string) {
    const headers = new Headers();
    if (token) {
        headers.set("Authorization", `token ${token}`);
    }
    const response = await fetch(url, { headers });
    if (!response.ok) {
        if (
            (response.status === 403 || response.status === 429)
            && response.headers.get("X-RateLimit-Remaining") === "0"
        ) {
            const reset = parseInt(response.headers.get("X-RateLimit-Reset")!) * 1000;
            console.log(`Rate limit exceeded. Waiting until ${new Date(reset).toLocaleTimeString()}`);
            await new Promise(resolve => setTimeout(resolve, reset - Date.now()));
        }
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    return response;
}

export async function githubDownload(
    repoPath: RepoPath,
    saveToFolder: string | URL,
    token?: string,
) {
    const [owner, repo, branch, ...restOfPath] = repoPath.split("/");
    const base = restOfPath.join("/");
    const url = `https://api.github.com/repos/${owner}/${repo}/zipball/${branch}`;
    const response = await api(url, token);
    const zip = await response.bytes();
    const files = await extract(zip);
    for (const { name, data } of files) {
        let cleanName = name.split("/").slice(1).join("/");
        if (base) {
            if (!cleanName.startsWith(base)) {
                continue;
            }
            cleanName = cleanName.slice(base.length);
        }
        while (cleanName.startsWith("/")) {
            cleanName = cleanName.slice(1);
        }
        if (!cleanName) continue;

        const savePath = new URL(cleanName, saveToFolder);
        if (cleanName.endsWith("/")) {
            await Deno.mkdir(savePath, { recursive: true });
        } else {
            await Deno.writeFile(savePath, data);
        }
    }

}
