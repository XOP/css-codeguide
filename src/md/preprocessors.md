## Syntax using preprocessors

As it was [mentioned](#about), this documentation is written with regards of [SASS](http://sass-lang.com/) (SCSS syntax) syntax. 

Nowadays it's hard to imagine writing and maintaining CSS without preprocessor engaged. It's a powerful tool for everyday frontend development. However, power is also responsibility, so it is important to sustain balance of productivity and language intricacy. 

Guide recommendations is to limit usage of preprocessor features to the following (in order of relevance):  

- Variables
- Nesting (\& - specific syntax)
- Mixins (includes)
- SASS helper functions

:page_with_curl: Check the [examples folder](example/) for the descriptive code samples. [Variables](example/_variables.scss) and [Mixins](example/_mixins.scss) will be used through this chapter as well. 


### Common formatting rules

Following SCSS syntax, preprocessor formatting is mostly identical to the [CSS syntax](#basic-formatting).

Here is the basic example of preprocessor syntax ([structural comments](#structural-comments) are dropped for brevity):

```scss
.component-name {
    @include trunc();
    
    margin: $offset-n 0;
    padding: $offset-xs;
    
    color: $color-text;
    
    &:hover {
        color: $color-text-light;
    }
}

.component-name__descendant {
    text-decoration: underline;
}
```

Here is somewhat complex version of this example:

```scss
.component-name {
    @include trunc();
    
    position: relative;
    
    margin: $offset-n 0;
    padding: $offset-xs;
    
    color: $color-text;
    
    &:hover {
        color: $color-text-light;
    }
    
    // component overlay
    &:after {
        @include cover();
        
        content: "";
        
        display: none; // hidden on mobile
    }
    
    @include respond($mq-desktop) {
        &:after {
            display: block;
            
            background: opacify($color-brand-secondary, .8);
        }
    }
}

.component-name__descendant {
    text-decoration: underline;
    
    @include respond($mq-desktop) {
        font-size: $font-size-l;
    }
}
```

Compared to the CSS formatting, there are some differences, or better say, complements:

- variables' usage
- mixins' usage
- sass functions' usage
- nesting specifics

We'll go through all these points in the following sections.


### Variables naming

:bulb: Depending on the preprocessor, variable name might need to begin with the key symbol, like `$` or `@`. In [Stylus](http://stylus-lang.com/docs/variables.html), however, this is optional. Due to the SASS syntax let's stick with the `$`-based naming.

It makes more sense for variables naming to inherit from [classnames naming](#naming-principles), following the same methodology pattern. Here is the basic example:

```scss
$color-light: #666;

$font-size-s: .6rem;

$offset-xxl: 4rem;
```

The naming pattern is:
```
[$]-[property-name]-[type] 
```

It can be extended further according to the project needs:
```scss
$color-main-dark: #3a1101;
```

or

```scss
$bg-color-secondary-75: #ea02dd;
```

...following the pattern:
```
[$]-[property-name]-[type]-[grade]
```

The latter might be more applicable to colors, since they are tricky to handle and usually require diverse approach.

Variables can be used to define another variables! This may be useful for creating offset- or typographic- system. A piece of a good advice will be - keep at simple, avoid complicated calculations.

One of the best practices of using variables for defining variables will be (no big surprise!) creating color scheme.


### Variables maintenance

todo

:bulb: Some complicated calculations might require local variables usage. In order not to mess with global variable namespace better idea would be to encapsulate them: 

```scss
.textarea {
    $textareaSumHeight: 3 * $font-size-n * $line-height-regular + (2 * $offset-s);
    $textareaSumBorderWidth: 2 * $form-border-width;
    
    @include form-element();
    
    height: calc(#{$textareaSumHeight} - #{$textareaSumBorderWidth});
    padding: $offset-s;
    
    width: 100%;
}
```

Please mind the order of local variables. They should be defined at the very top of the declarations list.

Naming is also different (camelCase in this, hm, _case_, but can be any other). The main intention is to differ local vars from the globals. This also can be achieved with the prefixes.


### Mixins

Mixins (paired with includes) are pretty useful and often save the day. To maintain your stylesheets _sane and clear_ keep close to this set of rules:

- Mixin should do _one thing_ and do it good
- Avoid large set of parameters (up to 3 is optimum)
- Provide defaults for the variables
- Use them wisely: restrain amount of available helpers to a minimum
- Avoid one-line mixins

**Good** example:

```scss
@mixin cover ($position: absolute) {
    position: $position;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    }
```

**Not good** examples:

```scss
// many variables to handle
@mixin common-font ($font-family, $font-size, $line-height, $font-style) {
    font: $font-style #{$font-size}/#{$line-height} $font-family, sans-serif;
}

// no default value
// name does not match the function
@mixin color ($color) {
    color: $color;
    background-color: black;
}

// single-line mixin
@mixin float-left () {
    float: left;
}
```

Here's usage examples illustrating formatting specifics:

```scss
.foo {
    @include cover(fixed);
    
    z-index: $z-index-modal;
}

.bar {
    @include cover();
    @include trunc();
    
    color: $color-text-light;
}

.tar {
    color: $link-color;
    
    &:hover {
        @include link-hover();
        
        color: $link-color-hover;
    }
}
```

Stick to the rules: 

- Define includes on top of the declaration list
- 1 blank line between includes and other code
- Same is valid for the nested elements

:zap: There can be an exception to the common practice! Consider the mixin, containing `media-query` rule - in most cases you won't want it to be on top of the ruleset. To separate them from the others, you might want to introduce special namespace, like `media-[mixin-name]`. 
But usually they just stand out due to their syntax:
 
 ```scss
 .foo {
    @include cover();
    
    padding: 2rem;
    
    @include media-respond-to($breakpoints-desktop) {
        padding: 4rem;
    }
 }
 ```


### Extends

As it was noticed, **mixins** are preferred over **extends**.

Why is that?

_Basically_, for saving yourselves from debugging convoluted code. Extends backed by nesting often lead to something excessively unwelcome.

So if there is no _really hard_ need, avoid using extends.

:bulb: What's more? In short, it is all about the strings repeatability and compression algorithms. Fact is, mixins provide a lot of repeating code blocks here and there, which altogether result in bigger size of uncompressed CSS file compared with the same file, generated with the help of extends. But results of the gzip-compressed files are the opposite, because of gzip specifics.
[Here is great article](http://csswizardry.com/2016/02/mixins-better-for-performance/) covering other valuable points.

Here is the list of articles totally worth reading before touching extends:

- [When to use @extend; when to use a mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)
- [Sass Mixins vs Extends: The Data](https://tech.bellycard.com/blog/sass-mixins-vs-extends-the-data/)
- [Why You Should Avoid Sass @extend](http://www.sitepoint.com/avoid-sass-extend/)


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
