## Syntax using preprocessors

As it was [mentioned](#about), this documentation is written with regards of [SASS](http://sass-lang.com/) (SCSS syntax) syntax. 

Nowadays it's hard to imagine writing and maintaining CSS without preprocessor engaged. It's a powerful tool for everyday frontend development. However, power is also responsibility, so it is important to sustain balance of productivity and language intricacy. 

Guide recommendations is to limit usage of preprocessor features to (in order of relevance):  

- Variables
- Nesting (\& - specific syntax)
- Mixins (includes)


### Common formatting rules

Following SCSS syntax, preprocessor formatting is identical to [CSS syntax](#basic-formatting) with some complements, which are above-mentioned variables and nesting.

Here is the basic example of preprocessor syntax:

```scss
.component-name {
    @include trunc();
    
    margin: $offset-n 0;
    min-width: $component-width;
    
    color: $color-text;
    
    &:hover {
        color: $color-text-light;
    }
}

.component-name__descendant {
    padding: $offset-xs;
}
```


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

### Variables naming

todo


### Variables maintenance

todo


### Mixins

todo

When you use mixins - write them first in a ruleset.


### Extends

> Only use extends when the rulesets that you are trying to DRY out are inherently and thematically related.
> Do not force relationships that do not exist: to do so will create unusual groupings in your project, as well as negatively impacting the source order of your code.
For more information please check out [this article](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)

