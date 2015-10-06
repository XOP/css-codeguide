## Comments

Comments are important.
Comments are very !important.
Comment all code, that potentially might raise questions later.
Comments should be short and capacious. At the same time beware of unnecessary commenting and keep them up to date.

### Mandatory commenting

Always comment "magic numbers" and tricky approaches.
Not mentioning typical hacks, some rules deserve being noticed.
If values like `z-index: 14;` or `margin: -137px auto;` make total sense today - try to figure it out after a month.

There is pretty brief list of rules that *do worth* commenting.
You might want to come up with your own list, but this is the nice starting point.

```stylus
.project-class {
    z-index: 31; // reason for z-index
    margin-left: -616px; // reason for negative margin
    -webkit-backface-visibility: hidden; // reason for hack
    overflow: hidden; // reason for overflow
	}
```

When using variables it is important to pay attention to values that just *do not fit*.
Generally it's not a good idea to combine variables with regular units.

Please avoid situations like this:

```stylus
$offset = 10px;

.project-class {
    padding: $offset ($offset + 3px); // by design
	}
```

As a common rule - *do not* rely on your memory or memory of your colleagues, just comment suspicious values.


### Code comments

Use these comments when to show context:
```stylus
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
```stylus
// small button
.btn.__small {
    ...
    }

// full-width button
.btn.__wide {
    ...
    }
```


### Helpers: TODO / FIXME

Many IDEs obtain nice feature providing support for TODO or FIXME comment keyword.

Current code guide suggests providing additional info along with the directives.  
Consider the following:  

*Author name* - allows to easily detect responsible person, even having Git annotate.

```stylus
/*
    TODO: stewie.griffin@acmecorp.com
*/
```

*Crux of the matter* - allows get the whole picture with ease.
```stylus
/*
    TODO: replace with variables
*/

/*
    FIXME: this value does not belong here
*/
```

*Due date* - it us pretty useful to understand the point of no return to this code.
```stylus
```

Of course these things colud be easily combined:
```stylus
/*
    TODO: stewie.griffin@acmecorp.com - cleanup with the feature "PhotoMarks" - 05/09/2015
    check and fix dependent components
*/
```

One extra healthy point here is to limit the number of **"todo"** expressions due to better organization.
