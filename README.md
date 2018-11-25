# flagbit tslint config

## How to use

Install the package inside your project...

```shell
yarn add @flagbit/tslint-config
```

...and add a tslint.json containing this:

```json
{
  "extends": "@flagbit/tslint-config"
}
```

## Which rules get applied?

Our tslint rules are pretty much the same as in a regular @angular/cli project,
but with a twist:

### newline-before-return

This is making your code more readable. Forcing a newline before return, if there
is more than one line in your method.

### no-irregular-whitespace

This is making your code more readable, as it forbids to many empty lines, where
they aren't necessary.

### no-unused-variable

This is resulting in cleaner code, as the linting fails if you defined a variable
that isn't used. This rule will also fail if ou imported a module, that you don't use.

### one-variable-per-declaration

This is making your code more readable, by throwing an error if you are defining
more than one variable per declaration block.

#### Example

This is bad, because you don't see in first sight if you are declaring or re-declaring:

```typescript
const one = 'one',
  two = 'two',
  three = 'three';
```

This is more readable:

```typescript
const one = 'one';
const two = 'two';
const three = 'three';
```

### typedef

We are forcing, that parameters and call-signatures always have a typedef.
This is leading to easier editing and/or extending, as you always know what
the methods need as input, and what they give back.

### variable-name

We are forcing proper variable-names, to have cleaner code. variables have to
be in `camelCase`, to see directly if one is a variable or a class or whatever.

#### Example

Bad:

```typescript
const SomeVariable = 'something';
const _someVariable = 'something';
```

Good:

```typescript
const someVariable = 'something';
```
