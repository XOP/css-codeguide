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

Taking that into consideration, here is  
**Current state of things**:


### Naming principles

Through all the code there's dash-binding syntax being used:
```
.element
.element-long-name
```

the same applies to variables, element descendants and everything else.

CSS example: 
```css
.media-component {
}

.layout-column {
}
```

SCSS example: 
```scss
$color-brand-primary: $eaf;

$line-height-regular: 1.5;
```

Element children are determined by '__' - separator:
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
modifiers - illustrate added or, well, _modified_ features of element   
and states - is mostly about interactions.

For instance:  
Modifiers: 'decorated', 'large size', 'secondary type' etc.  
States: 'disabled', 'in progress', 'hidden for user' etc.

Useful hint: if you are not confident with the type of the feature - just use modifier and change later when it's clear.

Modifiers are determined by '--' - separator:
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

States are determined by `is-` namespace:
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

### Utilities

Another concept to grasp - utility classes.  
With some respect to Atomic CSS this is the last stand between your CSS and production code. Simply put - they can override other CSS properties and you won't want to override them.  
Basic rule - they should complete only one simple task - usually this is hiding element or changing font-size. But actually this depends on you and your system.  
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

