// deno-lint-ignore-file no-explicit-any
import helpers, { type Helpers } from './helpers/index.ts';
export { type Helpers } from './helpers/index.ts';

/**
 * A function that creates an `HTMLElement` with the given tag name and actions.
 * Provides methods for adding attributes and event listeners.
 * 
 * @example Create a `div` element with a CSS class:
 * ```ts
 * import { div } from 'jsr:@dinosaur/dom';
 * 
 * const myDiv = div.set({ className: 'container' })('Hello, World!');
 * 
 * document.body.appendChild(element);
 * ```
 */
export type ElementCreator<E extends HTMLElement> = {
    (...children: (HTMLElement | ElementCreator<HTMLElement> | string)[]): E
} & {
    [K in keyof Helpers<E>]: HelperWrapper<E, Helpers<E>[K]>
};


/**
 * A function that wraps a helper to return a new `ElementCreator`.
 */
export type HelperWrapper<
    E extends HTMLElement,
    H extends (element: E, ...args: any[]) => void
> = H extends (element: E, ...args: infer A) => void 
    ? (...args: A) => ElementCreator<E> 
    : never;


export function elementFactory<E extends HTMLElement>(
    tag: string,
    ...actions: ((element: E) => void)[]
): ElementCreator<E> {
    const creator = ((...children: (HTMLElement | ElementCreator<HTMLElement> | string)[]) => {
        const element = document.createElement(tag) as E;
        actions.forEach(action => action(element));
        element.append(...children.map(child => {
            if (typeof child === 'string') return document.createTextNode(child);
            if (typeof child === 'function') return child();
            return child;
        }));
        return element;
    }) as ElementCreator<E>;
    const helperKeys = Object.keys(helpers) as (keyof Helpers)[];
    helperKeys.forEach(key => {
        const helper = helpers[key];
        //@ts-ignore - Not important
        creator[key] = ((...args) => {
            //@ts-ignore - Not important
            return elementFactory(tag, ...actions, element => helper(element, ...args));
        }) as HelperWrapper<E, Helpers[keyof Helpers]>;
    });
    return creator;
}
