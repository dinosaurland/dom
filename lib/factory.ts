// deno-lint-ignore-file no-explicit-any
import { Input } from "./elements.ts";
import * as helpers from './helpers/all.ts';

/**
 * A function that creates an `HTMLElement` with the given tag name and actions.
 * Provides methods for adding attributes and event listeners.
 * 
 * @example Create a `div` element with a CSS class:
 * ```ts
 * import { div } from 'jsr:@dinosaur/dom';
 * 
 * const myDiv = div.give({ className: 'container' })('Hello, World!');
 * 
 * document.body.appendChild(element);
 * ```
 */
// export type ElementCreator<E extends HTMLElement> =
//     & ((...children: (HTMLElement | string)[]) => E)
//     & { [K in keyof Helpers]: HelperWrapper<E, Helpers[K]> };
export type ElementCreator<E extends HTMLElement> = {
    (...children: (HTMLElement | string)[]): E;
    set: HelperWrapper<E, typeof helpers.set<E>>;
};

/**
 * A collection of functions that can be used to modify an element.
 */
export type Helpers = typeof helpers;

/**
 * A function that wraps a giver to return a new `ElementCreator`.
 */
export type HelperWrapper<
    E extends HTMLElement,
    H extends (element: E) => (...args: any[]) => void
> = H extends (element: E) => (...args: infer A) => void 
    ? (...args: A) => ElementCreator<E> 
    : never;


export function elementFactory<E extends HTMLElement>(
    tag: string,
    ...actions: ((element: E) => void)[]
): ElementCreator<E> {
    const creator = ((...children: (HTMLElement | string)[]) => {
        const element = document.createElement(tag) as E;
        actions.forEach(action => action(element));
        element.append(...children);
        return element;
    }) as ElementCreator<E>;
    const giverKeys = Object.keys(helpers) as (keyof Helpers)[];
    giverKeys.forEach(key => {
        const helper = helpers[key];
        creator[key] = ((...args) => {
            //@ts-ignore - It's fine, I promise
            return elementFactory(tag, ...actions, element => helper(element)(...args));
        }) as HelperWrapper<E, Helpers[keyof Helpers]>;
    });
    return creator;
}
