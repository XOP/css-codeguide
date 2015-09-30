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

### TODO-s

One good point at todo-s comments is to write your name there or the name of the responsible person for that code.
Also sometimes it is useful to keep the date you plan to realize your todo.

```stylus
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

### Context comments

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

### Modifications comments

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