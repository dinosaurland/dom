// deno-lint-ignore-file no-explicit-any
import { githubDownload } from "./utils/github.ts";
import { parse } from "jsr:@std/yaml";

type TagInfo = {
    tag: string;
    reference: string;
    isDeprecated: boolean;
    isExperimental: boolean;
};

const tempDir = new URL('./temp/', import.meta.url);
const docsPath = 'mdn/content/main/files/en-us/web/html/element';

await Deno.mkdir(tempDir, { recursive: true });
await githubDownload(docsPath, tempDir);

const docs: string[] = [];
for await (const entry of Deno.readDir(tempDir)) {
    if (!entry.isDirectory) continue;
    docs.push(entry.name);
}

const elements: TagInfo[] = [];
for (const docName of docs) {
    elements.push(...(await scrapeDoc(docName)));
}

await Deno.remove(tempDir, { recursive: true });

let code = 
`import { elementFactory, type ElementCreator } from "./factory.ts";
`

for (const { tag, reference, isDeprecated, isExperimental } of elements) {
    if (isExperimental) continue;
    const jsTag = tag[0].toUpperCase() + tag.slice(1);
    code +=
`
/**
 * Creates a \`${tag}\` element.${isDeprecated ? '\n * @deprecated' : ''}
 */
export const ${jsTag}: ElementCreator<${reference}> = elementFactory("${tag}");
`;
}

await Deno.writeTextFile(new URL('../lib/elements.ts', import.meta.url), code);






async function scrapeDoc(docName: string): Promise<TagInfo[]> {
    const docPath = new URL(`./${docName}/index.md`, tempDir);
    const docText = await Deno.readTextFile(docPath);

    const metadata = parse(docText.match(/---\n([\s\S]+?)\n---/)![1]) as any;
    const status = alwaysArray(metadata.status);
    const isDeprecated = status.includes('deprecated');
    const isExperimental = status.includes('experimental');

    const refMatch = docText.match(/domxref\("HTML([^"]+?)Element"\)/i)?.[1] ?? '';
    const reference = `HTML${refMatch}Element`;

    const tags = alwaysArray(metadata['browser-compat']).map((tag: string) => {
        return tag.split('.').pop()!;
    });
    if (!tags.length) tags.push(docName);

    return tags.map(tag => ({ tag, reference, isDeprecated, isExperimental }));
}

function alwaysArray<T>(value: T | T[]): T[] {
    return Array.isArray(value) ? value : [value];
}
