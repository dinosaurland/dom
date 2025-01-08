# @dinosaur/dom

A library for creating and manipulating DOM elements with ease.

## Usage

The library exports a set of element creator functions that, when called, return a new DOM element. The functions are named after the HTML tag they create. For example, `Div()` creates a new `<div>` element. You can pass children to assign as arguments to the creator functions.

```typescript
import { Div, H1 } from '@dinosaur/dom';

const app = Div(
    H1('Hello, world!')
);

document.body.appendChild(app);
```

Before calling the creator functions, you can set the elements progerties by calling the `set()` method on the creator function. The `set()` function takes an object with the deeply nested properties you want to set. Instead of passing the raw values, you can pass a `State` instance to automatically update the property when the state changes.

```typescript
import { Div, H1, Button, State } from '@dinosaur/dom';

const count = new State(0);

const app = Div.set({ id: 'app' })(
    H1('Counter App'),
    Button.set({
        onclick: () => count.value++,
        textContent: count.derive(i => `Count: ${i}`)
    })(),
);