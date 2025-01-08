// deno-lint-ignore-file no-explicit-any
import * as givers from './givers/all.ts';

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
export type ElementCreator<E extends HTMLElement> =
    & ((...children: (HTMLElement | string)[]) => E)
    & { [K in keyof Givers]: GiverWrapper<E, Givers[K]> };

/**
 * A collection of functions that can be used to modify an element.
 */
export type Givers = typeof givers;

/**
 * A function that wraps a giver to return a new `ElementCreator`.
 */
export type GiverWrapper<
    E extends HTMLElement,
    G extends (this: E, ...args: any[]) => void
> = G extends (this: E, ...args: infer A) => void ? (...args: A) => ElementCreator<E> : never;

export function elementFactory<E extends HTMLElement>(tag: string, ...actions: ((element: E) => void)[]): ElementCreator<E> {
    const creator = ((...children: (HTMLElement | string)[]) => {
        const element = document.createElement(tag) as E;
        actions.forEach(action => action(element));
        element.append(...children);
        return element;
    }) as ElementCreator<E>;
    const giverKeys = Object.keys(givers) as (keyof Givers)[];
    giverKeys.forEach(key => {
        const giver = givers[key];
        // @ts-ignore - It works
        creator[key] = ((...args) => {
            return elementFactory(tag, ...actions, element => giver.call(element, ...args));
        });
    });
    return creator;
}