CSS Codeguide
=============

> Documentation for coding and maintaining the most transparent CSS.
> It is bringing the experience of multiple front-end teams.

Current code guide is designed for experienced developers in the first place, but hopefully could be a great source of knowledge for the beginners.

It **doesn't cover topics on CSS fundamentals, selector performance or methodologies**. On the other hand it touches different aspects of CSS and provides recommendation on best practicies.

Basically this documentation is about how to work in team with 250+ style files and feel comfortable about that.

> All along the text there will be links to examples folder.
> In most cases it is invaluable for understanding the picture in total,
> so check it out before further reading and keep opened just in case.

Let's get started!


<!--mdMenu-->
## Table of Contents
* [Intro](#intro)
	* [Why another Guide](#why-another-guide)
	* [About](#about)
* [Structure of css/preprocessor file](#structure-of-csspreprocessor-file)
	* [Files organizing](#files-organizing)
	* [Code organization within a file](#code-organization-within-a-file)
* [Comments](#comments)
	* [Document author](#document-author)
	* [CSSG](#cssg)
	* [Helpers: TODO / FIXME](#helpers-todo--fixme)
	* [Mandatory commenting](#mandatory-commenting)
	* [Structural comments](#structural-comments)
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
* [Images](#images)
	* [Sprites](#sprites)
	* [Retina images](#retina-images)
	* [Styles for retina](#styles-for-retina)

<!--mdMenu-->


## Intro


### Why another Guide

There is quiet a number of style/code- guides already, that can be divided into:

**General guides**

- [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
- [CSS {guide: lines;}](https://cssguidelin.es)
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



## Structure of css/preprocessor file

CSS structure provides maintainability, scalability and any other -ability for the CSS code you wish for.  
Different methodologies propose different ways of organizing CSS files.  
Pros and cons of these approaches lay beyond the topic, so let's touch it slightly and focus on structure of single CSS file. 

Principles described below can be successfully adopted and integrated into existing system.


### Files organizing

The very basic option is to organize all code within _1_ file.  
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

Here 

### Code organization within a file

**[Code follow-up](example/_component-1.scss)**

Organization here is mostly about [comments](#comments) and consistency.  
As you can see, CSS component structure is pretty straightforward:

- [File data](#document-author) 
- [CSSG](#cssg)
- [Variables](#variables)
- Layout
- Parts


## Comments

Comments are _very_ `!important` and sadly often underestimated.

Comment all code, that potentially might raise questions later.  
Comments should be short and capacious. At the same time beware of unnecessary commenting and keep them up to date.


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


### Structural comments

These comments help to keep your CSS organized and improve understanding of HTML structure.
Consider each inner level a deeper nested element or modificator - this metaphor helps to get the image.

```css
/* Level 1
---------------------------------------------------------------------------------- */

.level-1 {
    ...
    }

/* /Level 1
---------------------------------------------------------------------------------- */
```

```css
/* Level 2
-------------------------------------------------- */

.level-2 {
    ...
    }

/* /Level 2
-------------------------------------------------- */
```

```css
/* Level 3 */

.level-3 {
    ...
    }

/* /Level 3 */
```

```css
/* Level 4 */
.level-4 {
    ...
    }
```

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


## Images

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.
We are using some plugins, written in our team.
There are several plugins: for generating sprites, for generating x1 size images from x2 and for generating styles for retina.

### Sprites

We use [css-sprites-generator](https://github.com/cheshirsky/css-sprites-generator).
It is a tiny css sprites generator based on inline sprites definition and references.

Example:

```scss
/** sprite: main-sprt; sprite-image: url('/img/sprites/main-sprt.png'); */

.my-main-page-icon {
    background-image: url('path/to/image.png'); /** sprite-ref: main-sprt; */
	}
```

Also we use mixin to handle sprites:

```scss
//
// set sprite reference to background image
// @url - image url
// @name - sprite reference name
// @params - extra string of sprite params
sprite($url, $name, $params = ""){

	$extras = "";
	if $params {
		$extras = "; " + unquote($params);
	}

	$ref = unquote("/** sprite-ref: ") + unquote($name) + unquote($extras) + unquote("; */");
	background-image: url($url) $ref
	}
```

### Retina images

We use [grunt-retina-img plugin](https://github.com/odnoklassniki/grunt-retina-img).
It is a small Grunt task for generating background-images from x2 size to x1.

### Styles for retina

We use [grunt-retina-css plugin](https://github.com/odnoklassniki/grunt-retina-css).
It is a Grunt task for generating CSS with 2x background-images.


-----


Feel free to ask questions via [email](mailto:stewiekillsloiss@gmail.com).  
All content is available for free distribution.  
[Link to source](https://github.com/XOP/css-codeguide) is mandatory when copying materials.

