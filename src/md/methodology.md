## Methodology


### Introduction

In a nutshell, CSS methodology prescribes _how CSS should be written_, therefore defining the scalability, maintainability and architecture in total.  
In fact, architecture is often named methodology and vice versa.

It also important to mention that this all does not make any sense if in the end results in productivity deterioration. Consider architecture in terms of convenience and development speed as well.

There is quiet a number of methodologies to choose from:
- [OOCSS](https://github.com/stubbornella/oocss/wiki)
- [BEM](http://getbem.com/)
- [SMACSS](https://smacss.com/)
- [Atomic CSS](http://acss.io/)
- [Suit CSS](http://suitcss.github.io/)
- [MCSS](http://operatino.github.io/MCSS/en/)

...and this is only the majority.

Some of them just provide rules and instructions, others propose the whole workflow to acquire.

Current guide takes advantage of common [BEM principles](https://css-tricks.com/bem-101/) and also has few traits from [Suit CSS](http://suitcss.github.io/).

If you feel yourself pretty confident around methodologies and BEM in particular, jump right to [file-structure](#structure-of-сsspreprocessor-file) section.  
Nevertheless it is highly advised to go through this path of knowledge.


### Basics

There's more than enough said about BEM, so it's no need to generate duplication.  
One important thing to remember, though: like everything else, BEM is a living system, approach, that deals with architecture issues. Since environments evolve, architecture adapts. And so does BEM (or other methodology of your choice).  
It has become very natural to see different takes on the same problem using same methodology.

:zap:  
This is actually very important, because it helps to grasp further materials in depth.  
So don't mind to to read through that part again and again until it becomes clear.


### Naming principles

In respect of naming patterns' variety (dashes, underscores, camel-/snake-/kebab-/etc- case) you may end up with hundreds of variations.

This is why it is important to define these fundamentals _before_ getting feet wet.

Through all the code there's **dash-binding syntax** being used:
```
.element
.element-long-name
```

The same applies to **element descendants** and everything else.

CSS example: 
```css
.media-component {
}

.layout-column {
}
```

This is also valid for the variables:

SCSS example: 
```scss
$color-brand-primary: yellow;

$line-height-regular: 1.5;
```

:bulb:
Please note that variables'-specific naming principles fully covered in the [corresponding chapter](#variables-naming).

**Child elements** are determined by '__' - separator:
```
.element__child
.element__child-long-name
.element__child__grandchild
```

CSS example: 
```css
.section {
}

.section__text {
   font-size: 12px;
}
```

HTML example:
```html
<section class="section">
    <p class="section__text">
        <span class="section__text__icon"></span>
        Section text
    </p>
</section>
```


### Modifiers and states

To help to get your head around the following:  
**modifiers** - illustrate added or, well, _modified_ features of element   
and **states** - are mostly about interactions.

Examples:  
Modifiers: 'decorated', 'large size', 'secondary type' etc.  
States: 'disabled', 'in progress', 'hidden for user' etc.

:bulb:
If you are not confident with the type of the feature - just use modifier and change it later when things get clear.

**Modifiers** are determined by '--' - separator:
```
.element--mod
.element--complex-name-mod
```

CSS example: 
```css
.header--main {
    background: red;
}
```

HTML example:
```html
<header class="header header--main">Title</header>
```

**States** are determined by `is-` namespace:
```
.is-state
```

CSS example: 
```css
.button {
}

.button.is-disabled {
    cursor: default;
}
```

HTML example:
```html
<button class="button is-disabled">Sorry, can't do</button>
```

So far it can be very tempting to use `.is-disabled` on it's own, though it shouldn't happen. Best way to guarantee this is prevent the states from having their own CSS rules. Use them only in combination with component classes.

To clarify some things:  
Modifier and State are the same things in terms of BEM, the only thing that differs is the semantics.  
This is the reason some other methodologies deviate from BEM pattern.

:bulb:  
There are several ways to define modifier-/state- classnames as well!

Pattern A:
```css
.button {
}

/* modifier */
.button--main {
}

/* state */
.button--disabled {
}

/* also a state! */
.button--is-disabled {
}
```

Pattern B:
```css
.button {
}

/* modifier */
.button.--main {
}

/* state */
.button.--disabled {
}

/* and another way */
.button.--is-disabled {
}
```

Pros:  
A - lesser specificity
B - flexible application

Cons:
A - hard times combining classes
B - common namespace, harder to maintain

Recommendations are pretty straightforward:  
use pattern A unless encounter a solid reason for switching to pattern B. 

:zap:
There's a bit more about states and modifiers. Check out the markup for the more complex example:

```html
<div class="input [state]">
    <div class="input__name [state]">
        Search
    </div>
    <input class="input__element [state]" type="text" placeholder="Find"/>
</div>
```

From here there are two popular options for handling state change in CSS (consider the same logic for modification):

- A - provide state for each component's descendant
- B - stylize descendants depending on parent's state

This can be illustrated with the following code:

Pattern A:

```html
<div class="input">
    <div class="input__name is-disabled">
        Search
    </div>
    <input class="input__element is-disabled" type="text" placeholder="Find"/>
</div>
```

```css
.input__name {
    color: #333;
}

.input__name.is-disabled {
    color: #999;
}

.input__element {
    background: #fff;
}

.input__element.is-disabled {
    background: #aaa;
}
```

Pattern B:

```html
<div class="input is-disabled">
    <div class="input__name">
        Search
    </div>
    <input class="input__element" type="text" placeholder="Find"/>
</div>
```

```css
.input__name {
    color: #333;
}

.input__element {
    background: #fff;
}

.input.is-disabled .input__name {
    color: #999;
}

.input.is-disabled .input__element {
    background: #aaa;
}
```

General recommendation is to use Pattern A over Pattern B. However, in some situations (and this one in particular) Pattern B is more beneficial, since it's easier to maintain the code and control states. 


### Utilities

Another concept to grasp - **utility classes**.  
With some respect to Atomic CSS this is the last stand between your CSS and production code. In other words - they can override other CSS properties and you won't want to override them.

Basic rule - they should complete only one simple task - hiding element, changing font-size - and nothing else. This means one-two declarations and generally no nesting.

Another rule - they can't be mixed with other classes or be included into other components - not in CSS.  
Pretty often they get assigned via JS.

And finally, utilities should never be overwritten. Think about them in the key of somewhat `!important` value.

Utilities are determined by `u-` namespace:
```
.u-hidden
```

CSS example: 
```css
.u-hidden {
    display: none;
}

.u-hidden-visually {
    visibility: hidden;
}
```

HTML example:
```html
<section class="menu js-menu u-hidden-visually">...</section>
```


### JS interactivity

JS-related classnames, which begin with the namespace `js-` are also called 'JS hooks' sometimes.  
Hooks are basically pointers or selectors and thus - can't have CSS rules applied to them.

The reason to use this approach is the separation of concerns. It's easier to debug and maintain the markup apart from the script logic.

Of course, it's a bit different story when using frameworks like [React](https://facebook.github.io/react/) or [Angular](https://angularjs.org/), so this point can be just passed.

CSS example: 
```scss
// may present in stylesheet 
// but no styling applied
// .js-test {}
```

HTML example:
```html
<a class="link js-test">Pseudo-link</a>
```

JS example:
```js
document
    .querySelectorAll('.js-test')
    .classList.add('u-hidden');
```

One extra recommendation - use a descriptive classname enough. For instance, `.js-navigation` is just an element hook, whereas `.js-navigation-open` is pointing to a corresponding trigger of sort. 


### Mixins (not a preprocessor thing yet)

Mixing in terms of methodology means blending properties of one component to another.  
Say, you have a _list item_, but you also need it to be _selectable item_.  
There are different ways of achieving this, certainly. 

The "mixin" way allows to avoid extra styling. On the other hand, it's harder to maintain layout and there's probability of getting into code mess.
Also, if you rely on component approach, this is not what you need to acquire.

Description here is given for understanding principles. But this approach is **not recommended**.  
Simply put - avoid until unavoidable.

CSS example: 
```scss

.list-item {
    padding: 2rem 0;
}

.selectable-item {
    outline: 1rem solid #f00;
}

.list-item.selectable-item {
    outline-offset: 1rem;
}

```

HTML example:
```html
<ul>
    <li class="list-item selectable-item">
        List-Item selectable content
    </li>
</ul>
```
