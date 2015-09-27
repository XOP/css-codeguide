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

```stylus
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

```stylus
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

```stylus
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

```stylus
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

```stylus
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

```stylus
/* global.styl */
...

$bg = $global.backgrounds;


/* anywhere else */
.class {
    background: $bg.basic;
    }
```

Module vars is a special case of global vars and only used inside certain module. It can also be placed in separate *global* file.

```stylus
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

```stylus
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
```stylus
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

```stylus
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
```stylus
@media (-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 120dpi), (min-resolution: 1.5dppx) {
	.selector {
	    ...
	    }
	}
```