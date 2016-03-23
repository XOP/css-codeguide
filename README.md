CSS Codeguide
=============

> Documentation for coding and maintaining the most transparent CSS.
> It is bringing the experience of multiple front-end teams.

:construction::construction::construction::construction::construction::construction::construction::construction::construction::construction:

> :warning: WORK IN PROGRESS  
> some parts may be missing  
> another require revision  
> **stay tuned for major updates!**

:construction::construction::construction::construction::construction::construction::construction::construction::construction::construction:

Current code guide is designed for **experienced developers** in the first place, but hopefully could be a great source of knowledge for the beginners.

Basically this documentation is about how to work in team with 250+ style files and feel comfortable about that.

Please be aware, that CSS fundamentals, selector performance or other common topics are not the part of this guide.
On the other hand there will be reviewed different aspects of CSS described with practical examples, recommendations and best practicies.

> All along the text there will be links to examples folder.
> In most cases it is invaluable for understanding the picture in total,
> so check it out before further reading and keep them opened just in case.

Let's get started!


<!--mdMenu-->
## Table of Contents
* [Intro](#intro)
	* [Why another Guide](#why-another-guide)
	* [About](#about)
* [Main principles](#main-principles)
	* [The first](#the-first)
	* [The second](#the-second)
	* [What's more](#what's-more)
* [Methodology](#methodology)
	* [Introduction](#introduction)
	* [Basics](#basics)
	* [Naming principles](#naming-principles)
	* [Modifiers and states](#modifiers-and-states)
	* [Utilities](#utilities)
	* [JS interactivity](#js-interactivity)
	* [Mixins (not a preprocessor thing yet)](#mixins-(not-a-preprocessor-thing-yet))
* [Structure of СSS/preprocessor file](#structure-of-сsspreprocessor-file)
	* [Files organizing](#files-organizing)
	* [Code organization within a file](#code-organization-within-a-file)
* [Comments](#comments)
	* [Structural comments](#structural-comments)
	* [Document author](#document-author)
	* [CSSG](#cssg)
	* [Helpers: TODO / FIXME](#helpers-todo--fixme)
	* [How to comment code](#how-to-comment-code)
	* [Preprocessor syntax specifics](#preprocessor-syntax-specifics)
	* [Mandatory commenting](#mandatory-commenting)
	* [To recap](#to-recap)
* [Syntax & formatting](#syntax--formatting)
	* [Basic formatting](#basic-formatting)
	* [Grouping of properties](#grouping-of-properties)
	* [Vendor prefixes](#vendor-prefixes)
	* [Best practices](#best-practices)
	* [Multiple selectors](#multiple-selectors)
	* [@-rules](#@-rules)
	* [Exceptions](#exceptions)
	* [Returning of cascade](#returning-of-cascade)
* [Syntax using preprocessors](#syntax-using-preprocessors)
	* [Common rules](#common-rules)
	* [Nesting](#nesting)
	* [Variables naming](#variables-naming)
	* [Variables maintenance](#variables-maintenance)
	* [Mixins](#mixins)
	* [Extends](#extends)
* [Tools](#tools)
	* [Task runners](#task-runners)
	* [Webpack](#webpack)
	* [Variables export](#variables-export)
	* [PostCSS all around](#postcss-all-around)

<!--mdMenu-->

-----

## Intro


### Why another Guide

There is quiet a number of style/code- guides already, that can be divided into:

**General guides**

- [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
- [CSS {guide: lines;}](https://cssguidelin.es)
- [SUIT CSS (codestyle only)](https://github.com/suitcss/suit/blob/master/doc/STYLE.md)
- [SASS guidelines](https://sass-guidelin.es)

Address the large audience, covering all (sometimes almost encyclopedic) aspects.  
Great for insight and common knowledge, but less practical.

**Company|Team-specific guides**

- [ThinkUp](https://github.com/ThinkUpLLC/ThinkUp/wiki/Code-Style-Guide:-CSS)
- [Wordpress](https://make.wordpress.org/core/handbook/best-practices/coding-standards/css/)
- [Trello](https://gist.github.com/bobbygrace/9e961e8982f42eb91b80)
- [Github Primer](http://primercss.io/guidelines/#scss)

Much more specific instructions and recommendations, from the companies or individuals sharing experience with the community.  
Practical for sure and make more sense if you work there.

So, why not just use one of them?  
Not taking it any further, this current guide focuses on the subject, leaving aside general issues.  
At the same time it contains methodology-specific features, [BEM](https://en.bem.info/), in particular.  
The core of it is brevity and common practical experience.

But anyhow, it would be a great thing to at least take a look at other examples before proceeding!


### About

Couple welcome words about code guide specifics to take the most from using it:

1\. Documentation is written with regards on using CSS preprocessor. 
As the most popular and widespread one, **[SASS](http://sass-lang.com/) (SCSS syntax)** is used for illustrating purposes.  
Please notice, that common conceptions are also valid for **vanilla CSS** in the first place.

:bulb:  
If you are not into preprocessors yet, check out the following popular tools you will most certainly find useful:

- [SASS/SCSS](http://sass-lang.com/)
- [LESS](http://lesscss.org/)
- [Stylus](https://learnboost.github.io/stylus/)
- [PostCSS](https://github.com/postcss/postcss)

2\. Current code guide is the result of several front-end teams experience, so it might have project-specific and environment assumptions. To make it more friendly there will be plenty of useful links to cover blank spots and useful tips on some topics.

Here's the legend:  
:bulb: - useful tip  
:zap: - warning or attention required  
:page_with_curl: - code follow-up

3\. "I'm reading and yet can not understand a thing!". Well I've been there too. Let's have a talk about it. Waiting for [your questions](https://github.com/XOP/css-codeguide/issues)! 

4\. Feedback is much appreciated as well!  
One of the main goals here is to help other front-end teams combat there problems with documentation. So don't hesitate and [contact](https://github.com/XOP/css-codeguide/issues) at ease.


## Main principles

As it comes from the title, this chapter is about principal ways to do CSS.

There are **two major trends** nowadays.


### The first 

...is the oldest school and thus most popular.  
It can be described with the following statements:

- one or several stylesheets in the `<head>` via the `<link>` tag
- `normalize.css` or `reset.css` prior to the main CSS
- some rules may be inlined in `<style>` to deal with the _browser issues_ 
- the order of rules is extremely important 
- the cascade takes it's toll as well
- inline styling is far less prominent and used only for specific features


### The second

...is heavily influenced by developing of JS frameworks, namely [React JS](https://facebook.github.io/react/) and the following spreading of corresponding CSS conceptions - [Radium](https://github.com/FormidableLabs/radium), [CSS modules](https://github.com/css-modules/css-modules) and some others.

What is this all about?

- CSS is controlled and maintained via JS
- inline styles over traditional external ones
- cascade and rules order almost do not matter

In fact, [here](https://speakerdeck.com/vjeux/react-css-in-js) is the presentation, covering all interesting points.


### What's more

Of course different combinations of the mentioned practices exist and appear from time to time.  
Further in the guide we'll stick to the classic approach.

Two reasons for backing this up:

1. Traditional system is way more popular and requires more attention
2. Second model is playing mostly on the JS field and slightly off the topic
 
This does not mean that supporters of the latter won't find anything useful here.  
In many ways CSS remains the same and these systems have many points of contact. 


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
``

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
B - common namespace

Recommendations are pretty straightforward:  
use pattern A unless encounter a firm reason for switching to pattern B. 


### Utilities

Another concept to grasp - **utility classes**.  
With some respect to Atomic CSS this is the last stand between your CSS and production code. In other words - they can override other CSS properties and you won't want to override them.

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


## Structure of СSS/preprocessor file

CSS structure is the kernel of the architecture.   
Different methodologies propose different ways of organizing CSS files.  
Pros and cons of these approaches are beyond the topic, so let's touch it slightly and focus on structure of single CSS file. 

Principles described below can be successfully adopted and integrated into existing system.


### Files organizing

:page_with_curl: **[Code follow-up](example/)**

The very basic option is to organize all code within _one_ file.  
This approach will work fine for small or/and one-time projects, that do not require maintainability whatsoever.
```
root/
    styles.css
```

For the sake of the guide goals and sanity this approach is not considered any further.

Consider file a CSS component.  
Components form the system:
```
css/
    navigation.css
    header.css
    layout.css
    ...
```

Large components may consist of multiple parts for the sake of readability:
```
css/
    header/
        header-layout.css (*)
        header-logo.css
        header-navigation.css
        ...
    ...
```
(*) notice the main component prefix, "header-" in this case. This is optional, but may solve search issues in IDE.

It can also be convenient to separate core modules - "atoms" and "molecules" - components, that consist of other components *or* unique and used just once:
```
css/
    base/
        icon.css
        logo.css
        navigation.css
        ...
    project/
        shopping-cart.css
        article-section.css
        ...
    ...
```

Pure CSS modules rely on full encapsulation on all levels:
```
css/
   header/
       header.css
       Header.jsx
   article/
       article.css
       Article.jsx
   ...
```


### Code organization within a file

:page_with_curl: **[Code follow-up](example/_component-1.scss)**

Organization here is mostly about [comments](#comments) and consistency.  
Generally, as you can see, CSS component structure is pretty straightforward:

- [File data](#document-author)
- Component title
- [CSSG](#cssg)
- [Variables](#variables)
- Layout
- Parts

Please notice, that except for Component title _all_ other parts can be omitted, according to the situation:

**[File data](#document-author)** is the privilege of the team preferences, it might be excessive when working alone.  
**[CSSG](#cssg)** is not needed when component consists of one element and almost "flat" in terms of cascade.  
**[Variables](#variables)** have nothing to do with CSS yet (except for [--custom-properties](https://drafts.csswg.org/css-variables/)) and pretty much optional if there are no local overrides or any other local properties.  
**Layout** is basically a component wrapper or skeleton, which might have modifiers applied to the descendants. It makes most sense when component itself is relatively complex.  
**Parts**, however are also optional, when component consists of one element, like button or link.  

This all leads to the important fact - simple CSS components are well structured "natively".


## Comments

Comments are _vital_ and sadly often underestimated.

In total, all code, that potentially might raise questions later, should be commented.  
Comments have to be short, capacious and up-to-date. Avoid excessive (unnecessary) commenting.

There are generally _two_ types of comments:  
- Structural comments (were briefly introduced in [previous chapter](#code-organization-within-a-file))
- All other comments will be covered right away!


### Structural comments

:page_with_curl: **[Code follow-up](example/_component-1.scss)**

These comments help to keep your CSS organized, consistent and way more readable.
Consider each inner level a deeper nested element or modifier - this metaphor helps to get the image.

**Level 1** is typically a component / file title.

```css
/* Level 1
---------------------------------------------------------------------------------- */

/* code */

/* /Level 1
---------------------------------------------------------------------------------- */
```

At the moment there might be questions - where _exactly_ to place the code?  
Is the block padding a normal thing?  

As it comes to practical side - this is the matter of choice, habit and team preferences.  
This may work for you...

```css
/* Element title
---------------------------------------------------------------------------------- */
.element {
    
}
/* /Element title
---------------------------------------------------------------------------------- */
```

...as fine as this:
```css
/* Element title
---------------------------------------------------------------------------------- */

.element {
    
}

/* /Element title
---------------------------------------------------------------------------------- */
```

For this code guide we'll stick with the **second** option.

But generally it does not matter.  
Choose the style and stick with it. Working in team implies identical code-styling, and different code examples should look like written by one person.

**Level 2** is for structure per se. Variables, Layout, component parts: Head, generic Right part, Content section etc.  

```css
/* Level 2
-------------------------------------------------- */

/* code */

/* /Level 2
-------------------------------------------------- */
```

**Level 3** and **Level 4** normally would be used seldom. However, you may consider them for more complex component structures, something like part of a part of a part.

**Level 3:**

```css
/* Level 3 */

/* code */

/* /Level 3 */
```

**Level 4:**

```css
/* Level 4 */
/* code */
```

Common rules for structural comments:
- Respect _level order_ - Level 2 should be placed only inside Level 1, Level 4 only inside Level 3 etc.
- Indentation is prohibited, that means each new comment block organizes a "caret return" (this will be demonstrated later)

To improve readability use 2 whitespaces between level 1 and level 2 blocks. Use 1 whitespace between all others.  
Again, it's only a recommendation. Stick with what works best for you.

```css
/* Module
---------------------------------------------------------------------------------- */

.module {

}

/* Module - Part 1
-------------------------------------------------- */

/* Core */

.part-1 {

}

/* /Core */


/* Modification */

.part-1--modifier {

}

/* /Modification */

/* /Module - Part 1
-------------------------------------------------- */


/* Module - Part 2
-------------------------------------------------- */

.part-2 {

}

/*/ Module - Part 2
-------------------------------------------------- */

/* /Module
---------------------------------------------------------------------------------- */
```

:bulb:  

It's not convenient to type these slashes and dashes by hand or copy paste the pieces of code all the time.  
There's a bunch of tools to bring fun to the boredom.

For instance, there are snippets from [IDE cross-project live templates repo](https://github.com/XOP/live-templates). Based on [Live Templates](https://www.jetbrains.com/idea/help/live-templates.html) they are compliant with most of [Jetbrains](https://www.jetbrains.com/) products.

:zap: 

Snippets for Sublime Text is the work in progress.


### Document author

Having this piece of code at the top of the file immediately answers many questions, especially when the file is to be seen for the first time.  

```scss
/**
* author:       S Griffin | IM : contactme69 | e-mail : wdybih@gmail.com
* spec:         http://link
* created:      11/02/2013
*
* comments:		It's a nice example of CSS styleguide
* @project class:	.somecode
* @project colors:	#f0f0f0, #ffe1e1
**/
```

Seems redundant, but you've got the idea.  
Long intro is not always welcome (for instance in teams with _history_),
 so it's just a suggestion. Fields can easily be added ot removed at the every stage of code-style integration.

There's also a snippet for that in [live templates repo](https://github.com/XOP/live-templates).


### CSSG

The main idea behind [CSSG](http://cssg.rocks) project is bringing extra transparency to the common CSS codebase.

Simply put, it's a meta-language that uses CSS comments for html (_-module_) documenting.

Here's an example:

```css
/*
cssg

	media                   --special | --custom
	    media__header
	        ...
	        
	    media__content
	        a . media__link
	            <icon>
	            
	        media__text
	            ...

*/
```

It's pretty easy to start and hard to resist hereafter.

Seems obvious now, but there's a snippet for that as well in the [live templates repo](https://github.com/XOP/live-templates).  
In fact, there's a common `bs` (bootstrap) template that just gets you ready with all basic things. 


### Helpers: TODO / FIXME

Many IDEs obtain nice feature providing support (at least code highlighting) for TODO or FIXME comment keyword.

This code guide suggests providing additional info along with the directives.  
Consider the following:  

*Author name* - allows to easily detect responsible person, even having Git annotate.

```css
/*
    TODO: stewie.griffin@acmecorp.com
*/
```

*Crux of the matter* - allows get the whole picture with ease.
```css
/*
    TODO: replace with variables
*/

/*
    FIXME: this value does not belong here
*/
```

*Due date* - it us pretty useful to understand the urgency or/and point of no return for this current code.
```css
/*
    FIXME: 17.08.2015
*/
```

Of course these things colud be easily combined:
```css
/*
    TODO: stewie.griffin@acmecorp.com - cleanup with the feature "PhotoMarks" - 21.09.2015
    check and fix dependent components
*/
```

One extra healthy point here is to limit the number of **"todo"** expressions due to better organization.


### How to comment code

So far it should be pretty clear how to create structure in CSS file, leave author notes and prepare ground for the code landing.  

Since it appears, your main concern with regards to styleguide, will be code maintainability. Respect some basic rules and you will be safe:
- leave comments to improve readability
- avoid unnecessary comments that harm readability
- too many 'TODO'-s - it's time to refactor the whole thing

Also, there is a couple of best practices, that worth mentioning:
- always comment magic numbers and tricky approaches
- separate variables' and values' concerns

Some clarification is needed here:

**Always comment "magic numbers" and tricky approaches**

Not mentioning typical hacks, some rules deserve being noticed.
If values like `z-index: 14;` or `margin: -137px auto;` make total sense today - try to figure it out after a month (clue - you'll never do).

```scss
.project-class {
    margin-top: 13px; // pixel-moving, probably?
    font-size: 1.66rem; // reason for non-standard value
    }
```

**Values and Variables - separation of concerns**

When using variables it is important to pay attention to values that just _do not fit_.
Generally it's a _bad idea_ to combine variables with regular units.

Avoid situations like this:

```scss
$offset = 10px;

.project-class {
    padding: $offset ($offset + 3px); // by design
	}
```


### Preprocessor syntax specifics

Preprocessors introduce JS-style of comments:

```scss
/* traditional comment */
.foo {
}

// "inline" comment
.bar {
}
```

"Inline" comments can be used in the absolutely same manner along with the "block" comments.
Possible, but _not desired_ outcome of that:

```scss
//
// Foo component
.foo {
    overflow: hidden !important; // need this to override inline

    color: $color-main;


    /* parent context */
    .bar & {
        padding: 1rem;
    }
}

/*
    todo: replace Foo with Tar
*/
.bar {
    padding: 0 calc(100% - 980px); /* page restrictions */
}
```

This example is exaggerated on purpose.
The point is - to prevent visual pollution some code-guide conventions required.

Here's the proposition:
1. _Everywhere but inside_ of curly braces (consider "rule scope") use "block" comments. Practical examples can be found [earlier in this chapter](#structural-comments).
2. On the contrary, use "inline" comments only _inside_ of curly braces. This will come more and more handy with intensive using of preprocessor features - nesting, & - selection etc.

With these in mind, let's "fix" the previous example:

```scss
/* Foo
-------------------------------------------------- */

.foo {
    overflow: hidden !important; // need this to override inline

    color: $color-main;

    // parent context
    .bar & {
        padding: 1rem;
    }
}

/* /Foo
-------------------------------------------------- */


/* Bar
-------------------------------------------------- */

/* TODO: replace with Tar */

.bar {
    padding: 0 calc(100% - 980px); // page restrictions
}

/* /Bar
-------------------------------------------------- */
```

Don't mind the "&"-usage, nesting and all other formatting specifics yet.
This is the scope of the [following chapter](#syntax--formatting).


### Mandatory commenting

Some CSS rules _deserve_ to be commented. This practice has been proved by time.
There is pretty brief list of such rules, which sure is not dogmatic.

Feel free to come up with your own list, here's the nice starting point:

- `z-index`
- `margin (with negative value)`
- `overflow: hidden`
- `translate3d(0)` or `-webkit-backface-visibility`

...


### To recap

Follow a common rule:

> _Do not_ rely on your memory or memory of your colleagues

Just comment suspicious values.
Thank yourself later.


## Syntax & formatting

### Basic formatting

todo: code follow-up

Let's define the very basics for formatting.  
Most of these rules are supported by various IDEs:

- 4 spaces for indentation
- new line for each declaration ('block'-notation)
- every declaration ends with semicolon
- double quotes where needed
- prefer shorthands over multiple properties
- spaces and braces on their places

This can be simply illustrated with the following code:

```css
.foo {
    margin: 0;
    padding: 1rem 2rem;
    background: #333 no-repeat url("images/foo.png");
    font-family: "Custom Font", Arial, sans-serif;
}
```


### Grouping of properties

Excessive example of writing CSS rules in order.
The point here is visual and logic separation of rules.
One of the way how to organize declarations:

1. Positioning selectors
2. Box model/size
3. Borders/backgrounds
4. All other stuff
5. Animations

```css
.class {
	position: relative;
	right: 0;
	left: 0;
	z-index: 77;

	display: inline-block;
	width:100%;
	height: 100%;
	overflow: hidden;
	margin: 0;
	padding: 4px 5px 5px;

	border: #ccc solid 1px;
	border-top-color: #999;
	background: #fff;
	background-image: url(/images/icon.png);

	color: #333;
	line-height: 15px;
	font: 12px Arial, Helvetica, sans-serif;
	}
```


### Vendor prefixes

It is much better to rely on [autoprefixer](https://github.com/postcss/autoprefixer) with this one.
Anyhow, here is recommended style:

```css
.class {
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.class {
	-webkit-animation-duration: 1s;
	animation-duration: 1s;

	-webkit-animation-name: myAnimation;
	animation-name: myAnimation;
}
```


### Best practices

The following list summarizes frequently used best practices for writing and maintaining CSS:
- prefer `rem`-s or/and `pixel` values over `em`-s
- prefer component approach over random and overall
- keep component-specific styles in separate files
- break-up complex components

Preprocessor-related:
- keep global variables in one or multiple _variable_-only files
- avoid local/custom variables
- if needed, keep them clearly commented and separated from globals
- avoid variable mutations


### Multiple selectors

Here you can find the way how to organize selectors in real life. Typically we separate different types of selectors:
* pseudo elements and states
* child selectors
* modificators
* siblings/other entity

There are some node modules to make it easier, like [CSScomb](https://github.com/csscomb/csscomb.js).
See example below to see how all of selectors live together.

```css
/* Elem
-------------------------------------------------- */

.elem {
	display: block;
	}
	.elem:hover {
		display: none;
		}

	.elem.__special {
		height: 180px;
		}

    .elem_child {
	    background: red;
	    }

.elem.__n1 { color: red; }
.elem.__n2 { color: green; }
.elem.__n3 { color: yellow; }

.elem-elem {
	text-align: center;
	}

	.elem-elem_child {
		text-align: left;
		}
        .elem-elem_child:first-child {
	        font-size: 10px;
	        }
		.elem-elem_child:before,
		.elem-elem_child:after {
			content: "";
			display: block;
			}
			.elem-elem_child:before:hover {
				opacity: .5;
				}
		.ie8 .elem-elem_child {
			font-size: 11px;
			}

.elem-elem-foo,
.elem-elem-goo,
.elem-elem-bar {
	text-align: left;
	font-weight: bold;
	}

.elem-elem-bar {
	color: red;
	}

.elem-elem-goo {
	position: static;
	}

/* /Elem
-------------------------------------------------- */
```


### @-rules

todo


### Exceptions

Reason for exceptional code-styling should be transparency and visual grace, not any other controversial idea.

```css
.mb-x {margin-bottom: 4px;}
.mb-2x {margin-bottom: 8px;}
.mb-3x {margin-bottom: 12px;}
.mb-4x {margin-bottom: 16px;}

a.white:hover,
.white_hover:hover {color: #eee;}

.card__xxs,
.card__xs,
.card__s,
.card__m,
.card__l,
.card__xl,
.card__xxl
	{
	background-repeat: no-repeat;
	}
```


### Returning of cascade

Sometimes you have really deep nesting elements:

```css
.elem {
    }

    .elem-child {
        }

        .elem-child-child {
            }

            //...
```

What you can make here is to return cascade back when it is logically possible.

```css
.elem {
    }

    .elem-child {
        }

.elem-child-child {
    }

    .elem-child-child-child {
        }

        //...
```


## Syntax using preprocessors

No matter what preprocessor you are using. The point is to decide which functionality you use with these preprocessors.
Here is the list what features of preprocessors we are using:

* Variables
* Nesting (with limitations)
* Mixins
* Code blocks
* Loops (with restrictions)

### Common rules

Whilst you can drop out brackets from declaration using stylus, we recommend not to do that.
Separate nesting rules with a whitespace.

```scss
/* bad */
.class
    display block
    color red
    &:hover {
        color: #000;
        }

/* good */
.class {
    display: block;
    color: red;

    &:hover {
        color: #000;
        }
    }
```

The rule here is to write your code as plain css.

### Nesting

Avoid using unnecessary nesting and deeper than **3** levels. We use nesting only for:

* Pseudo elements
* Context classes
* Refactoring/redesign issues

All other cases rely on MCSS. One more thing we want to mention is never use composite class names using nesting.
It makes impossible to find classes in your project.

```scss
/* awful */
.module {
    ...

    &_block {}
}

/* bad */
.module {
    ...

    .module_block {}
    }

.module:after {
    ...
    }

.module_block:hover {
    ...
    }

/* good */
.module {
    ...

    &:after {
        ...
        }
    }

    .module_block {
        &:hover {
            ...
            }
        }
```

Do not use `&` as a child in nesting except context classes.

```scss
/* bad */
.block {
    .module & {
        ...
        }
    }

/* good */
.block {
    .ie9 & {
        ...
        }
    }
```

Sometimes you make refactoring/redesign of some code. Common practice for that is to use modificators, such as `__v2` or `__redesign`.
In this way you can use nesting for all selectors inside. Also it is possible to use `&` before selectors to show this is nesting.
Just choose your own way and follow it everywhere.
*Note: We are not using `&`.*

```scss
/* good */
.block.__v2 {
    // ...
    // very long code, we don't see parent on the screen

    .module {
        ...
        }

    // ...
    }

/* good */
.block.__v2 {
    // ...
    // very long code, we don't see parent on the screen

    & .module {
        ...
        }

    // ...
    }
```

Do not use structural comments inside nesting. If you want to do that - check out your logic, something wrong with it.

```scss
/* bad */
.block {
    /* Module
    -------------------------------------------------- */
    .module {
        ...
        }
    /* /Module
    -------------------------------------------------- */
    }

/* good */
/* Module
-------------------------------------------------- */
.block {

    .module {
        ...
        }

    }
/* /Module
-------------------------------------------------- */
```

### Variables naming

todo


### Variables maintenance

todo


### Mixins

todo

When you use mixins - write them first in a ruleset.


### Extends

> Only use extends when the rulesets that you are trying to DRY out are inherently and thematically related.
> Do not force relationships that do not exist: to do so will create unusual groupings in your project, as well as negatively impacting the source order of your code.
For more information please check out [this article](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)



## Tools

todo


### Task runners


### Webpack


### Variables export

todo: SASS to JS


### PostCSS all around



-----


Feel free to ask questions via [email](mailto:stewiekillsloiss@gmail.com).  
All content is available for free distribution.  
[Link to source](https://github.com/XOP/css-codeguide) is mandatory when copying materials.

