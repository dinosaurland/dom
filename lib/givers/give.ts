import { State } from "jsr:@dinosaur/state@^0.2.2";

type DeepPartialValue<T> = T extends Record<string | number | symbol, unknown> ? DeepPartial<T> : (T | State<T>);
type DeepPartial<T> = {
    [K in keyof T]?: DeepPartialValue<T[K]>;
};

export function give<E extends HTMLElement>(this: E, assignable: DeepPartial<E>) {
    deepAssign(this, assignable);
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
    object[key] = await state.value;
    using stream = state.watch();
    for await (const value of stream) {
        object[key] = value;
    }
}
