CSS Codeguide
=============

> Documentation for coding and maintaining the most transparent CSS 

## Structural comments
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

/* /Level 2 */

/* Level 3 */

.somecode {

	}

/* /Level 3 */

/* Level 4 */
.somecode {

	}
```

Example of this approach:
```css
/* Module 1
---------------------------------------------------------------------------------- */

.somecode1 {

	}

/* Module 1 - Part 1
-------------------------------------------------- */

.part1 {

	}

/* /Module 1 - Part 1 */

/* Module 1 - Part 2
-------------------------------------------------- */

.part2 {

	}

/* /Module 1 - Part 2 */

/* /Module 1
---------------------------------------------------------------------------------- */


/* Module 2
---------------------------------------------------------------------------------- */

.somecode2 {

	}

/* /Module 2
---------------------------------------------------------------------------------- */
```

## Document author
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

## TODO-s
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

## Selectors and rules
Excessive example of writing CSS rules in order.  
The point here is visual and logic separation of rules.
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

So-called *"Relational rules"* can be combined regardless usual order.  
```css
.class {
    display: inline-block;
    vertical-align: middle;
	}

.class {
    position: absolute;
    left: 0; top: 0; right: 0; bottom: 0;
	}

.class {
    position: absolute;
    z-index: 1000; /* reason for z-index */
	}

.class {
    width: 200px;
    left: 50%; margin-left: -100px;
	}

.class {
    height: 100px;
    top: 50%; margin-top: -50px;
	}

.class {
    height: 18px;
    line-height: 18px;
	}
```

## Vendor prefixes
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

## Mandatory commenting
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

## Selectors and selectors
```css
/* Elem
-------------------------------------------------- */

.elem{
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

.elem-elem-bar {
	position: static;
	}

/* /Elem */
```

## Exceptions
Reason for exceptional code-styling should be transparency and visual grace, not any other controversial idea.
```css
.mb-x {margin-bottom: 4px;}
.mb-2x {margin-bottom: 8px;}
.mb-3x {margin-bottom: 12px;}
.mb-4x {margin-bottom: 16px;}

a.white:hover,
.white_hover:hover {color:#eee;}

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

## CSSG
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
