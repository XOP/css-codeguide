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


### Mixins

todo

When you use mixins - write them first in a ruleset.


### Extends

> Only use extends when the rulesets that you are trying to DRY out are inherently and thematically related.
> Do not force relationships that do not exist: to do so will create unusual groupings in your project, as well as negatively impacting the source order of your code.
For more information please check out [this article](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)


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
