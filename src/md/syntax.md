## Syntax & formatting

### Basic formatting

todo: code follow-up

Let's define the very basics for formatting.  
Most of these rules are supported by various IDEs' linters:

- 4 spaces for indentation step
- new line for each declaration ('block'-notation)
- new line for each selector
- two lines between rules
- every declaration ends with semicolon
- single space between the property and value
- no space between property name and semicolon
- double quotes where needed (dropped for single font-family names)
- prefer shorthands over multiple properties
- curly braces: _opening_ on the line with selector, _closing_ on the new line after all rules
- single space between selector and curly brace

This can be simply illustrated with the following code:

```css
.foo {
    margin: 0;
    padding: 1rem 2rem;
    background: #333 no-repeat url("images/foo.png");
    font-family: "Custom Font", Arial, sans-serif;
}

.bar-first,
.bar-second {
    position: relative;
    background: transparent;
}

.tar {
    visibility: hidden;
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
.foo {
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.bar {
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


### Indentation

Typically indentation used in stylesheets to illustrate the cascade, or how HTML is structured.

Something like this:
```css
.menu {
    margin: 0;
}

    .item {
        margin: 10px 0;
        padding: 10px 20px;
        
        background: #ddd;
    }
    
        .item a {
            text-decoration: none;
        }
        
            .item a:hover {
                text-decoration: underline;
            }
```

This might work for a micro-stylesheet, but will fail in anything bigger, and here's why:

- indentation system should stick to HTML structure, otherwise it will only be confusing, which makes maintaining a tedious task 
- reading comfort decreases with every other indented block, so everything after 3 indent levels considered hard to read
- imagine appearing of wrapper for `menu` element, and remember to indent the whole structure in order to match the principles
- hard times understanding whether it is the direct descendant of the element or a cascade taking place
- and so on...

Generally, relying on the current guide principles, this recommendations will be out of scope. [Component approach](), [BEM naming principles]() and even [CSSG]() make indentation totally useless.

Revised version of the same code sample could look like (structural comments dropped for brevity):
```css
/* 
cssg

menu
    menu__item +

        item
            a . item__link
*/

.menu {
    margin: 0;
}

.menu__item {
    margin: 10px 0;
}

.item {
    padding: 10px 20px;
            
    background: #ddd;
}

.item__link {
    text-decoration: none;
}

.item__link:hover {
    text-decoration: underline;
}
```

Consider using preprocessor, isolating code in separate files and you'll never want to use traditional indentation again.

:bulb: if you are using vanilla CSS, the following tip might be helpful:
Use indentation only for pseudo-elements, pseudo-classes and in context- (browser-) specific cases.

Notice also, that there is no empty line between main selector and descendants.
 
```css
.item {
    padding: 10px 20px;
            
    background: #ddd;
}

.item__link {
    text-decoration: none;
}
    .item__link:before {
        content: "link: ";
    }
    .item__link:hover {
        text-decoration: underline;
    }
        .item__link:hover:before {
            color: transparent;
        }
        
.item__image {
    padding: 10px;
}
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
