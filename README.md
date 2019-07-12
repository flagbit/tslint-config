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

### completed-docs

Everything needs to be documented! A good example of well documented code can
be found here:

[HooksService](https://github.com/flagbit/angular-storefront/blob/develop/projects/angular-storefront-services/src/lib/services/hooks.service.ts)

A minimal example would be something like this:

```typescript
/**
 * ExampleComponent
 * ================
 *
 * This component is used to demostrate how our code should look like.
 */
export class ExampleComponent {
  /**
   * We are storing something inside this property
   */
  private _something = false;

  /**
   * The description of this method
   * @param param The parameter that is getting passed
   */
  public someMethod(param: number): boolean {
    if (param) {
      return true;
    }

    return this._something;
  }
}
```

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
be in `camelCase` or `UPPERCASE`, to see directly if one is a variable or a
class or whatever. Also leading underscores are allowed, to name private
properties in classes. The `UPPERCASE` is forcing us to use `const`

#### Example

Bad:

```typescript
const Some_VariAble = 'something';
```

Good:

```typescript
let someVariable = 'something';
const SOMEVARIABLE = 'something';

export class ExampleComponent {
  private _property: boolean;
}
```

### no-unused-css

We make sure that we don't have css inside our stylesheets that isn't used
inside the component.

### template-i18n

We make sure that everytime an i18n directive is used inside the templates, we
also added an i18n-id. This is making your translation-files way more readable.

### use-component-view-encapsulation

We are forcing that we never use `ViewEncapsulation.None` in components.
This way we are minimizing the risk of breaking styles outside of the
component we're working on.

### prefer-on-push-component-change-detection

We are forcing `ChangeDetection.OnPush` in components. With this we are
minimizing the risk of a poor performance by too deep and heavy ChangeDetection
loops.
