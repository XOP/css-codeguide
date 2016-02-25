CSS Codeguide
=============

> Documentation for coding and maintaining the most transparent CSS.
> It is bringing the experience of multiple front-end teams.

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
* [Methodology](#methodology)
	* [Introduction](#introduction)
	* [Basics](#basics)
	* [Naming principles](#naming-principles)
	* [Modifiers and states](#modifiers-and-states)
	* [Utilities](#utilities)
	* [JS interactivity](#js-interactivity)
* [Structure of СSS/preprocessor file](#structure-of-сsspreprocessor-file)
	* [Files organizing](#files-organizing)
	* [Code organization within a file](#code-organization-within-a-file)
* [Comments](#comments)
	* [Structural comments](#structural-comments)
	* [Document author](#document-author)
	* [CSSG](#cssg)
	* [Helpers: TODO / FIXME](#helpers-todo--fixme)
	* [Mandatory commenting](#mandatory-commenting)
	* [Code comments](#code-comments)
* [Syntax & formatting](#syntax--formatting)
	* [Basic formatting](#basic-formatting)
	* [Grouping of properties](#grouping-of-properties)
	* [Vendor prefixes](#vendor-prefixes)
	* [Combining of selectors](#combining-of-selectors)
	* [Exceptions](#exceptions)
	* [Returning of cascade](#returning-of-cascade)
* [Syntax using preprocessors](#syntax-using-preprocessors)
	* [Common rules](#common-rules)
	* [Nesting](#nesting)
	* [Variables](#variables)
	* [Mixins](#mixins)
	* [Extends](#extends)
	* [Media queries](#media-queries)

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

1. Documentation provided is written with regards on using CSS preprocessor. 
As the most popular and widespread one SCSS is used in documentation.  
Please notice, that common conceptions are valid for vanilla CSS in the first place.

If you are not into preprocessors yet, check out the following popular tools you will most certainly find useful: [SASS/SCSS](http://sass-lang.com/), [LESS](http://lesscss.org/), [Stylus](https://learnboost.github.io/stylus/), [PostCSS](https://github.com/postcss/postcss).

2. Current code guide is the result of the front-end teams experience, so it might have project-specific and environment assumptions. To make it more friendly there will be useful links to cover blank spots and useful tips on some topics.

3. Feel free to fork it, edit and use inside your project. Feedback is much appreciated!  
One of the main goals is to help other front-end teams combat there issues with documentation. So don't hesiate and contact at ease.

4. If you have any questions, comments or suggestions, please open an issue.


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

JS-related classnames, which begin with the namespace `js-` are also called 'JS hooks' sometimes. Hooks are basically pointers or selectors and thus - can't have CSS rules applied to them.

The reason to use this approach is the separation of concerns. It's easier to debug and maintain the markup apart from the script logic.

Of course, it's a bit different story when using framework like [React](https://facebook.github.io/react/) or [Angular](https://angularjs.org/), so this point can be just passed.

CSS example: 
```css
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


## Structure of СSS/preprocessor file

CSS structure is the kernel of the architecture.   
Different methodologies propose different ways of organizing CSS files.  
Pros and cons of these approaches lay beyond the topic, so let's touch it slightly and focus on structure of single CSS file. 

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
Consider each inner level a deeper nested element or modificator - this metaphor helps to get the image.

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

```css
/* Level 3 */

/* code */

/* /Level 3 */
```

```css
/* Level 4 */
/* code */
```

Common rules for structural comments:
- Respect _level order_ - Level 2 should be placed only inside Level 1, Level 4 only inside Level 3 etc.
- Nesting is prohibited, that means each new comment block organizes a "caret return" (this will be demonstrated later)

Use 2 whitespaces between level 1 blocks and 1 whitespace between anothers.

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


/* Modifications */

.part-1.__mod-1 {

	}

.part-1.__mod-2 {

	}

/* /Modifications */

/* /Module - Part 1
-------------------------------------------------- */


/* Module 1 - Part 2
-------------------------------------------------- */

.part-2 {

	}

/*/ Module - Part 2
-------------------------------------------------- */

/* /Module
---------------------------------------------------------------------------------- */
```

You can use snippets from [IDE cross-project live templates repo](https://github.com/XOP/live-templates).
For example, for the first level comment just type `ch1 + tab`.


### Document author

Please have this snippet located at the beginning of your stylesheet, bless you!
You don't code anonymously, right?

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
 so it's just a suggestion. Fields can easily be added ot removed at every stage of code-style integration.


### CSSG

The main idea behind [CSSG](http://cssg.rocks) project is bringing transparency to the common CSS codebase.
In a nutshell, it's a meta-language that uses CSS comments for module documenting.

Take a look at live example:

```css
/*
cssg

	pform_map		                            $__active $__search $__map
		pform_tags
			<tico>

		pform_map_search
			<input>
			suggest . __active
				pform_map_img
					<object>

				pform_map_ac . lp
				<sugggest-list>
				pform_map_ac . lp . __active

*/
```

It's pretty easy to start and hard to resist hereafter.


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
    FIXME: 07/08/2015
*/
```

Of course these things colud be easily combined:
```css
/*
    TODO: stewie.griffin@acmecorp.com - cleanup with the feature "PhotoMarks" - 05/09/2015
    check and fix dependent components
*/
```

One extra healthy point here is to limit the number of **"todo"** expressions due to better organization.


### Mandatory commenting

There is pretty brief list of rules that *do worth* commenting.
You might want to come up with your own list, but this is the nice starting point.

```scss
.project-class {
    z-index: 31; // reason for value
    margin-left: -616px; // reason for negative margin
    -webkit-backface-visibility: hidden; // reason for hack
    overflow: hidden; // reason for unsafe value 
    }
```

Always comment "magic numbers" and tricky approaches.
Not mentioning typical hacks, some rules deserve being noticed.
If values like `z-index: 14;` or `margin: -137px auto;` make total sense today - try to figure it out after a month (clue - you'll never do).

```scss
.project-class {
    margin-top: 13px; // pixel-moving, probably?
    font-size: 1.66rem; // reason for non-standard value
    }
```

When using variables it is important to pay attention to values that just *do not fit*.
Generally it's not a good idea to combine variables with regular units.

Please avoid situations like this:

```scss
$offset = 10px;

.project-class {
    padding: $offset ($offset + 3px); // by design
	}
```

Finally - a common rule: *do not* rely on your memory or memory of your colleagues, just comment suspicious values. Thank yourself later.


### Code comments

**todo**

Use these comments when to show context:
```scss
//
// icon
.block_ic {
    ...
    }

//
// img
.block_img {
    ...
    }
```

Use these comments when to describe modificators:
```scss
// small button
.btn.__small {
    ...
    }

// full-width button
.btn.__wide {
    ...
    }
```


## Syntax & formatting

### Basic formatting

Going from easy-to-difficult let's define how the simple selector must look:
* four spaces indents, no tabs;
* closing brace align with properties (weird, but just try it :)
* each declaration on a new line
* whitespaces for logical separation of CSS rules if needed
* shorthand properties if possible

```css
.class {
    display: block;
    margin: 12px;
    background: #dedede url('path/to/img.png') 0 0 no-repeat;
    color: #333;
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

### Combining of selectors

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

### Variables

All variables should start with `$` and written in camel case. We split variables into 3 categories:

* Global
* Module
* Local

Global variables have `$global` namespace and it can be used in each files.
We use grunt to make files ending with `.global.styl` visible for a whole project.

*Note, that alignment and styling of this files is the same with javascript.*

```js
$global = {
    colors: {
        default: #333,
        inverted: #ccc,
        ...
    },

    backgrounds: {
        basic: #fff,
        light: #f0f0f0,
        ...
    },

    ...
}
```

Later in this file you can set up aliases for a short declaration, like this:

```scss
/* global.styl */
...

$bg = $global.backgrounds;


/* anywhere else */
.class {
    background: $bg.basic;
    }
```

Module vars is a special case of global vars and only used inside certain module. It can also be placed in separate *global* file.

```scss
$toolbar {
    height: {
        wide: 40px,
        thin: 20px
    },

    colors: {
        item: #333,
        hover: #eb722e,
        selected: #b84819
    },

    ...
}
```

Local variables is used in local module file and located in *vars* section:

```scss
/* Vars
-------------------------------------------------- */

$radius = 3px;

$ff = arial, helvetica, sans-serif;

$heightSmall = 24px;
$heightBig = 32px;

/* /Vars
-------------------------------------------------- */
```

### Mixins

When you use mixins - write them first in a ruleset.
```scss
/* bad */
.selector {
    key: value;

    mixin();
    mixin2();
    }

/* good */
.selector {
    mixin();
    mixin2();

    key: value;
    }
```

Here are some useful set of mixins that we are using:

```scss
/* Utilities
-------------------------------------------------- */

//
// clearfix - modern way
clearfix() {
	&:before,
	&:after {
		content: '';
		display: table;
		}

	&:after {
		clear: both;
		}
	}

//
// vertical aligning using pseudo-elements
// 2 mixins - va() && va_rarget()
// @height - implicitly set container height
va($height = 100%){
    &:after {
        content: "";
        display: inline-block;
        vertical-align: middle;
        min-height: 100%;
        height: $height;
        }
    }

//
// ellip / ellip-i
// @inline - inline element
// @boxSizing - apply if used with paddings
ellip($inline = false, $boxSizing = false){

    if $inline {
        display: inline-block;
        }

    if $boxSizing {
        box-sizing: border-box;
        }

    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    }

/* /Utilities
-------------------------------------------------- */

/* Special
-------------------------------------------------- */

//
// render in separate layer
// hack to balance CPU/GPU load
// example: gpuRender(chrome, mac-chrome)
gpuRender($browsers){
    $i = 0;
    $comma = ",";
    $rule = "";

    for $b in arguments {
        $i += 1;
        if ($i == length(arguments)){
            $comma = "";
            }

        $rule += unquote(".") + $b + unquote(" &") + unquote($comma);
        }

    {$rule} {
        backface-visibility: hidden;
        }
    }

/* /Special
-------------------------------------------------- */

/* Animation
-------------------------------------------------- */

animFadeIn($on){
	if $on {
		transition: $animDuration opacity, visibility 0s $animDuration;
		}
    }

animFadeInCallback($on){
    if $on {
        transition-delay: 0s;
        }
    }

animColor($on){
	if $on {
		transition: $animDuration color;
		}
    }

animBackgroundColor($on){
	if $on {
		transition: $animDuration background-color;
		}
    }

animBorderColor($on){
    if $on {
        transition: $animDuration border-color;
        }
    }

/* /Animation
-------------------------------------------------- */
```

### Extends

> Only use extends when the rulesets that you are trying to DRY out are inherently and thematically related.
> Do not force relationships that do not exist: to do so will create unusual groupings in your project, as well as negatively impacting the source order of your code.
For more information please check out [this article](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)

### Media queries

Nothing special here, just use the snippet showing below:
```scss
@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 120dpi), (min-resolution: 1.5dppx) {
	.selector {
	    ...
	    }
	}
```



-----


Feel free to ask questions via [email](mailto:stewiekillsloiss@gmail.com).  
All content is available for free distribution.  
[Link to source](https://github.com/XOP/css-codeguide) is mandatory when copying materials.

