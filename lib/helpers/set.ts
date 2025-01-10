import { State } from "@dinosaur/state";

type DeepPartialValue<T> = T extends Record<string | number | symbol, unknown> ? DeepPartial<T> : (T | State<T>);
type DeepPartial<T> = {
    [K in keyof T]?: DeepPartialValue<T[K]>;
};

export function set<E extends HTMLElement>(element: E): (assignable: DeepPartial<E>) => void {
    return (assignable: DeepPartial<E>) => deepAssign(element, assignable);
}

function deepAssign<T>(
    target: T,
    newValues: DeepPartial<T>
) {
    const keys = Object.keys(newValues) as (keyof T)[];
    keys.forEach(key => {
        const value = newValues[key];
        if (value instanceof State) {
            assignState(target, key as keyof T, value);
        } else if (typeof value === 'object') {
            deepAssign(target[key], value!);
        } else {
            target[key] = value as T[Extract<keyof T, string>];
        }
    });
}

async function assignState<T, K extends keyof T>(
    object: T,
    key: K,
    state: State<T[K]>
) {
    object[key] = state.value;
    using values = state.watch();
    for await (const value of values) {
        try {
            object[key] = value;
        } catch (_) {
            return;
        }
    }
}
