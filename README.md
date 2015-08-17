CSS Codeguide
=============

> Documentation for coding and maintaining the most transparent CSS.
> This style guide was born at the [ok](http://ok.ru) front-end team.

Current style guide is designed for advanced users, but still might be very useful for the beginners.
We don't cover how to write pure css or selector performance here. If you need this information we advise to look at [css guide lines](http://cssguidelin.es/) and then back to compare different approaches to decide which one works better for you.
The point of this guide is to show how to live with more than 250 style files and feel comfortable with that.
We gonna try to be not too boring, so be ready to surf through examples and best practices.

Well, here we are!


* [Structure of css/styl file](#structure-of-cssstyl-file)
	* [Structural comments](#structural-comments)
	* [Document author](#document-author)
	* [TODO-s](#todo-s)
	* [Mandatory commenting](#mandatory-commenting)
	* [CSSG](#cssg)
	* [Files structure](#files-structure)
	* [Methodology](#methodology)
* [Syntax & formatting](#syntax--formatting)
	* [Basic formatting](#basic-formatting)
	* [Grouping of properties](#grouping-of-properties)
	* [Vendor prefixes](#vendor-prefixes)
	* [Combining of selectors](#combining-of-selectors)
	* [Exceptions](#exceptions)
* [Syntax using preprocessors](#syntax-using-preprocessors)
	* [Common rules](#common-rules)
	* [Nesting](#nesting)
	* [Variables](#variables)
	* [Mixins](#mixins)
	* [Extends](#extends)
	* [Media queries](#media-queries)
* [Sprites](#sprites)
* [Abbreviations glossary](#abbreviations-glossary)
* [States and modifications glossary](#states-and-modifications-glossary)
* [Extras](#extras)


## Structure of css/styl file
The first thing that you should think about is a structure of you styles. No matter how does this structure look like.
The main idea here is to have this structure. In this chapter we'll show the structure that we are using in our project.

### Structural comments
Separate different levels of your code into the blocks.

```css
/* Level 1
---------------------------------------------------------------------------------- */

.somecode {

	}

/* /Level 1
---------------------------------------------------------------------------------- */

/* Level 2
-------------------------------------------------- */

.somecode {

	}

/* /Level 2
-------------------------------------------------- */

/* Level 3 */

.somecode {

	}

/* /Level 3 */

/* Level 4 */
.somecode {

	}
```

Use 2 whitespaces between level 1 blocks and 1 whitespace between anothers.

*Note that it looks much better with real data. Check it out at sample.styl.*

```css
/* Module 1
---------------------------------------------------------------------------------- */

.somecode1 {

	}

/* Module 1 - Part 1
-------------------------------------------------- */

.part1 {

	}
	
/* Modifications */

.part1.__mod1 {}
.part1.__mod2 {}

/* /Modifications */

/* /Module 1 - Part 1
-------------------------------------------------- */

/* Module 1 - Part 2
-------------------------------------------------- */

.part2 {

	}

/*/ Module 1 - Part 2
-------------------------------------------------- */

/* /Module 1
---------------------------------------------------------------------------------- */


/* Module 2
---------------------------------------------------------------------------------- */

.somecode2 {

	}

/* /Module 2
---------------------------------------------------------------------------------- */
```

### Document author
Please have this snippet located at the beginning of your stylesheet, bless you!
You don't code anonymously, right?

```css
/**
* author:       S Griffin | IM : contactme69 | e-mail : wdybih@gmail.com
* spec:         http://link
* created:      11/02/2013
*
* comments:		It's a nice example of CSS styleguide
* @project class:	.somecode
* @project colors:	#123123
**/
```

Seems redundant, but you've got the idea.

### TODO-s

```css
/*
    TODO: check if scroll needed >> refactor layer positioning
    ? new mod __position
    layers : media / video / [photo]
*/

/*
    todo: Griffin - check extra padding
*/

/*
    todo: cleanup with the feature "PhotoMarks"
*/
```

One extra healthy point here is to limit the number of **"todo"** expressions due to better organization.

### Mandatory commenting
Always comment magic numbers and tricky approaches.
If you are using `z-index: 14;` or `margin: 31px 27px;` and you totally understand it today - try to figure it out through the month.
I guess everyone was in situation like this, so the such type of comments are very important in your code.
It's just a set of rules, that does worth commenting.  
You might want to come up with your own list, but this is the nice starting point.

```css
.project-class {
    z-index: 31; /* reason for z-index */
    margin-left: -616px; /* reason for negative margin */
    -webkit-backface-visibility: hidden; /* reason for hack */
    overflow: hidden; /* reason for overflow */
	}
```

As a rule - *do not* rely on your memory or memory of your colleages, just comment suspicious values.

### CSSG
The project [CSSG](https://github.com/XOP/css-o-gram), that I've started not so long time ago is intended to improve readability and bring more transparency to your CSS.  

Take a look at live example:

```css
/*

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

### Files structure
Keep your styles in small atomic files. You can use either imports or concatenate your files with gulp/grunt.
The idea here is to have each file for a single responsibility. Examples of atomic files:
* modal.styl
* menu.styl
* toolbar.styl

### Methodology
Methodology we are using called [Multilayer CSS](http://operatino.github.io/MCSS/en/) (MCSS).
Core methodology principles are based on [BEM](https://en.bem.info/). It consists of two important things:

1. Philosophy for structure of style files
2. Naming convention for selectors (see example below)

```css
.module-name {}
.module-name_child {}
.module-name_child_child-of-child {}
.module-name_child__modifier {}
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

There are some node modules to make it easier, like [CSScomb](https://github.com/csscomb/csscomb.js). See example below to see how all of selectors live together. 

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

## Syntax using preprocessors
Nobody uses pure css in big projects, right? If you still use - check out for "css preprocessors".
No matter what preprocessor you are using. The point is to decide which functionality you use with these preprocessors.
Here is the list what features of preprocessors we are using:

* Nesting (with limitations)
* Variables
* Mixins/extends
* Loops

### Common rules
Whilst you can drop out brackets from declaration using stylus, we recommend not to do that.
Separate nesting rules with a whitespace.

```css
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

The rule here is to write your code as pure css.

### Nesting
Avoid to use unnecessary nesting and nesting deeply than 3 levels. We use nesting only for:

* Pseudo elements
* Context classes
* Refactoring/redesign issues

All other cases rely on MCSS. One more thing we want to mention is never use composite class names using nesting.
It makes impossible to find classes in your project.

```css
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

```css
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

```css
/* global.styl */
...

$bg = $global.backgrounds;


/* anywhere else */
.class {
    background: $bg.basic;
    }
```

Module vars is a special case of global vars and only used inside certain module. It can also be placed in separate *global* file.

```css
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

```css
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
```css
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

```css
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
```css
@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 120dpi), (min-resolution: 1.5dppx) {
	.selector {
	    ...
	    }
	}
```

## Sprites


## Abbreviations glossary
This is highly recommended practice to indulge in your work.  
The idea of glossary stems from common naming convention and widely used by project contributors.

Here is more or less full list of abbreviations, used by our team:

```
a - link (as an anchor)
ac - action (most used for clickable elements [wrapper])
add - additional
au - author
aux - auxiliary

b - body
btn - button

c - center
cat - category
cnt - contents
col - column
count - counter

dec - decorate
del - delete
descr - description
delim - delimiter

err - error
ext - external

h - header
hld - holder (wrapper analog, depends on layout logic)

i - item
ic - icon | input checkbox
img - image
ir - input radio
isl - input select
it - input text
itx - textarea

l - left | label
lk - link (like source link)
lst - list

n - name
ntf - notification
num - number

opt - options
ovr - overlay

ph - placeholder | photo

r - right

scr - screen | scroll
sm - small

t - title
tx - text

w - wrapper
```

## States and modifications glossary
>> coming up!


## Extras
Take a look at some suggestions on [JS codeguide](js.md) provided as well. 

-----

Feel free to ask questions via [email](mailto:wdybih@gmail.com).  
All content is available for free distribution.  
[Link to source](https://github.com/XOP/css-codeguide) is mandatory when copying materials.