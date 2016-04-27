## Syntax & formatting

### Basic formatting

todo: code follow-up

Let's define the very basics for formatting.  
Most of these rules are supported by linters in various IDEs:

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

Grouping is one extra step on the organization ladder.

There are at least 3 possible ways to handle declarations in the rule scope:

1. No particular order (that's not helping)
2. Alphabetical order
3. Grouping by some attribute

**Alphabetical order** is the "better than nothing" option. It is mostly useful for developers who seldom touch CSS. But for the long run there is a room for improvement.

Grouping of properties allow faster allocating of certain properties. Simply put, you know that "position" should be on top along with other position-related properties, i.e. "top", "left" etc. So you look for it in certain places instead of going through the list with no particular understanding.

Properties can be divided into following groups or categories:

1. Position
2. Display
3. Flex
4. Box model
5. Background
6. Color
7. Typography
8. Visibility
9. Transform
10. Animation
11. Anything else

Of course there can be different exceptions, so feel free to extend the list basing on this starting point.

...

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

There is nothing extraordinary about syntax here. Same indentation, formatting etc. with only one extra indentation level.

Typical example:
```css
.item {
    flex: 1 0 100%;
}

@media screen and (min-width: 40em) {
    .item {
        flex: 1 1 auto;
    }    
}
```

Or:
```css
.foo {
    border: 1px solid black;
    padding: 1px;
}

@supports (box-shadow: 0 0 2px black inset) {
    .foo {
        box-shadow: 0 0 2px black inset;
        
        /* override the rule above the @supports rule */
        border: none;
        padding: 2px;
    }
}
```

Regarding `@media`-rules there are two simple practices of writing:
1. Specific rules for each selector (as in the first example)
2. Common block for all selectors in the end of file or logical section

Guidance here is simple as well: use the first approach until second one is _required_. Usually the latter is less convenient and more error-prone.
