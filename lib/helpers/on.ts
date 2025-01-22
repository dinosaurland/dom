export function on<E extends HTMLElement>(
    element: E,
    events: {
        [K in keyof HTMLElementEventMap]?: (this: E, ev: HTMLElementEventMap[K]) => void;
    }
): void {
    for (const [type, listener] of Object.entries(events)) {
        if (!listener) continue;
        element.addEventListener(type as string, listener as EventListener);
    };
}
