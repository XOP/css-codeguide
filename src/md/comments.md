## Comments

Comments are _very_ `!important` and sadly often underestimated.

Comment all code, that potentially might raise questions later.  
Comments should be short and capacious. At the same time beware of unnecessary commenting and keep them up to date.


### Document author

Please have this snippet located at the beginning of your stylesheet, bless you!
You don't code anonymously, right?

```scss
/**
* author:       S Griffin | IM : contactme69 | e-mail : wdybih@gmail.com
* spec:         http://link
* created:      11/02/2013
*
* comments:		It's a nice example of CSS styleguide
* @project class:	.somecode
* @project colors:	#f0f0f0, #ffe1e1
**/
```

Seems redundant, but you've got the idea.  
Long intro is not always welcome (for instance in teams with _history_),
 so it's just a suggestion. Fields can easily be added ot removed at every stage of code-style integration.


### CSSG

The main idea behind [CSSG](http://cssg.rocks) project is bringing transparency to the common CSS codebase.
In a nutshell, it's a meta-language that uses CSS comments for module documenting.

Take a look at live example:

```css
/*
cssg

	pform_map		                            $__active $__search $__map
		pform_tags
			<tico>

		pform_map_search
			<input>
			suggest . __active
				pform_map_img
					<object>

				pform_map_ac . lp
				<sugggest-list>
				pform_map_ac . lp . __active

*/
```

It's pretty easy to start and hard to resist hereafter.


### Helpers: TODO / FIXME

Many IDEs obtain nice feature providing support (at least code highlighting) for TODO or FIXME comment keyword.

This code guide suggests providing additional info along with the directives.  
Consider the following:  

*Author name* - allows to easily detect responsible person, even having Git annotate.

```css
/*
    TODO: stewie.griffin@acmecorp.com
*/
```

*Crux of the matter* - allows get the whole picture with ease.
```css
/*
    TODO: replace with variables
*/

/*
    FIXME: this value does not belong here
*/
```

*Due date* - it us pretty useful to understand the urgency or/and point of no return for this current code.
```css
/*
    FIXME: 07/08/2015
*/
```

Of course these things colud be easily combined:
```css
/*
    TODO: stewie.griffin@acmecorp.com - cleanup with the feature "PhotoMarks" - 05/09/2015
    check and fix dependent components
*/
```

One extra healthy point here is to limit the number of **"todo"** expressions due to better organization.


### Mandatory commenting

There is pretty brief list of rules that *do worth* commenting.
You might want to come up with your own list, but this is the nice starting point.

```scss
.project-class {
    z-index: 31; // reason for value
    margin-left: -616px; // reason for negative margin
    -webkit-backface-visibility: hidden; // reason for hack
    overflow: hidden; // reason for unsafe value 
    }
```

Always comment "magic numbers" and tricky approaches.
Not mentioning typical hacks, some rules deserve being noticed.
If values like `z-index: 14;` or `margin: -137px auto;` make total sense today - try to figure it out after a month (clue - you'll never do).

```scss
.project-class {
    margin-top: 13px; // pixel-moving, probably?
    font-size: 1.66rem; // reason for non-standard value
    }
```

When using variables it is important to pay attention to values that just *do not fit*.
Generally it's not a good idea to combine variables with regular units.

Please avoid situations like this:

```scss
$offset = 10px;

.project-class {
    padding: $offset ($offset + 3px); // by design
	}
```

Finally - a common rule: *do not* rely on your memory or memory of your colleagues, just comment suspicious values. Thank yourself later.


### Structural comments

These comments help to keep your CSS organized and improve understanding of HTML structure.
Consider each inner level a deeper nested element or modificator - this metaphor helps to get the image.

```css
/* Level 1
---------------------------------------------------------------------------------- */

.level-1 {
    ...
    }

/* /Level 1
---------------------------------------------------------------------------------- */
```

```css
/* Level 2
-------------------------------------------------- */

.level-2 {
    ...
    }

/* /Level 2
-------------------------------------------------- */
```

```css
/* Level 3 */

.level-3 {
    ...
    }

/* /Level 3 */
```

```css
/* Level 4 */
.level-4 {
    ...
    }
```

Use 2 whitespaces between level 1 blocks and 1 whitespace between anothers.

```css
/* Module
---------------------------------------------------------------------------------- */

.module {

	}

/* Module - Part 1
-------------------------------------------------- */

/* Core */

.part-1 {

	}

/* /Core */


/* Modifications */

.part-1.__mod-1 {

	}

.part-1.__mod-2 {

	}

/* /Modifications */

/* /Module - Part 1
-------------------------------------------------- */


/* Module 1 - Part 2
-------------------------------------------------- */

.part-2 {

	}

/*/ Module - Part 2
-------------------------------------------------- */

/* /Module
---------------------------------------------------------------------------------- */
```

You can use snippets from [IDE cross-project live templates repo](https://github.com/XOP/live-templates).
For example, for the first level comment just type `ch1 + tab`.


### Code comments

**todo**

Use these comments when to show context:
```scss
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
```scss
// small button
.btn.__small {
    ...
    }

// full-width button
.btn.__wide {
    ...
    }
```
