## Syntax & formatting

### Basic formatting

Going from easy-to-difficult let's define how the simple selector must look:
* four spaces indents, no tabs;
* closing brace align with properties (weird, but just try it :)
* each declaration on a new line
* whitespaces for logical separation of CSS rules if needed
* shorthand properties if possible

```stylus
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

```stylus
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

```stylus
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

```stylus
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

```stylus
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

```stylus
.elem {
    }

    .elem-child {
        }

        .elem-child-child {
            }

            //...
```

What you can make here is to return cascade back when it is logically possible.

```stylus
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