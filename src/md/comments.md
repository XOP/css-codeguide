## Comments

Comments are very important. Comment all code, that potentially might has questions later.
Comments should be short and capacious. At the same time beware of unnecessary commenting and keep your comments up to date.

### Mandatory commenting

Always comment magic numbers and tricky approaches.
If you are using `z-index: 14;` or `margin: 31px 27px;` and you totally understand it today - try to figure it out through the month.
I guess everyone was in situation like this, so the such type of comments are the most important in your code.
It's just a set of rules, that does worth commenting.
You might want to come up with your own list, but this is the nice starting point.

```stylus
.project-class {
    z-index: 31; // reason for z-index value
    margin-left: -616px; // reason for negative margin
    -webkit-backface-visibility: hidden; // reason for hack
    overflow: hidden; // reason for overflow 
	}
```

As a rule - *do not* rely on your memory or memory of your colleagues, just comment suspicious values.

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