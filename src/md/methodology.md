## Methodology


### Introduction

In a nutshell, CSS methodology prescribes how CSS should be written, therefore defining the scalability, maintainability and architecture in total.  
In fact, architecture is often named methodology and vice versa.

It also important to mention that this all does not make any sense if in the end results in productivity deterioration. Consider architecture in terms of convenience and development speed as well.

There is quiet a number of methodologies to choose from:
- [OOCSS](https://github.com/stubbornella/oocss/wiki)
- [BEM](http://getbem.com/)
- [SMACSS](https://smacss.com/)
- [Atomic CSS](http://acss.io/)
- [Suit CSS](http://suitcss.github.io/)
- [MCSS](http://operatino.github.io/MCSS/en/)

Some of them just provide rules and instructions, others propose the whole workflow to acquire.  
Feel free to investigate what suits your needs best!

Current guide takes advantage of common [BEM principles](https://css-tricks.com/bem-101/) and also has few traits from [Suit CSS](http://suitcss.github.io/).

You can skip the following chapters and jump right to [file-structure](#structure-of-сsspreprocessor-file), but it is highly advised to go through this path of knowledge.


### Basics

There's more than enough said about BEM, so it's no need to generate duplication.  
One important thing to remember, though: like everything else, BEM is a living system, approach, that deals with architecture issues. Since environment evolves, architecture adapts. And so does BEM (or other methodology of your choice).  
It has become very natural to see different takes on the same problem using same methodology.

Taking that into consideration, here is the **current state of things**:


### Naming principles

Taking into consideration amount of naming patterns (dashes, underscores, camel-/snake-/kebab-/etc- case) you may end up with hundreds of variations.

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

To clarify some things:  
Modifier and State are the same things in terms of BEM, the only thing that differs is the semantics. This is the reason some other methodologies deviate from BEM pattern.

:bulb:
There are several ways to define modifiers/states classnames as well!

Pattern 1:
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
``

Pattern 2:
```css
.button {
}

/* modifier */
.button.--main {
}

/* state */
.button.--disabled {
}

/* or another way */
.button.--is-disabled {
}
```

...todo


### Utilities

Another concept to grasp - **utility classes**.  
With some respect to Atomic CSS this is the last stand between your CSS and production code. Simply put - they can override other CSS properties and you won't want to override them.  
Basic rule - they should complete only one simple task - hiding element, changing font-size, etc. Actually this depends on you and your system features.  
Another rule - they can't be mixed with other classes - not in CSS.  
Often they are assigned via JS.

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


### Mixins (not a preprocessor thing yet)

Mixing in terms of methodology means blending properties of one component to other.  
Say, you have a _list item_, but you also need it to be _selectable item_.  
There are different ways of achieving this, certainly. The "mixin" way allows to avoid extra styling. On the other hand, it's harder to maintain layout and there's probability of getting into code mess.
Also, if you rely on component approach, this will not work.
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
