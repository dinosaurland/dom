import { on } from "./on.ts";
import { set } from './set.ts';

export default {
    set,
    on,
};

export type Helpers<E extends HTMLElement = HTMLElement> = {
    set: typeof set<E>;
    on: typeof on<E>;
};
