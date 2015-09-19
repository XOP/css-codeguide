## Structure of css/styl file

The first thing that you should think about is a structure of you styles. No matter how does this structure look like.
The main idea here is to have this structure. In this chapter we'll show the structure that we are using in our project.

### Files structure

Keep your styles in small atomic files. You can use either imports or concatenate your files with gulp/grunt.
The idea here is to have each file for a single responsibility. Examples of atomic files:
* modal.styl
* menu.styl
* toolbar.styl

### Structural comments

Separate different levels of your code into the blocks.

```stylus
/* Level 1
---------------------------------------------------------------------------------- */

/* /Level 1
---------------------------------------------------------------------------------- */


/* Level 2
-------------------------------------------------- */
//
/* /Level 2
-------------------------------------------------- */


/* Level 3 */

/* /Level 3 */


/* Level 4 */
```

Use 2 whitespaces between level 1 blocks and 1 whitespace between anothers.

```stylus
/* Module 1
---------------------------------------------------------------------------------- */

.somecode1 {

	}

/* Module 1 - Part 1
-------------------------------------------------- */

.part1 {

	}

/* Modifications */

.part1.__mod1 {}
.part1.__mod2 {}

/* /Modifications */

/* /Module 1 - Part 1
-------------------------------------------------- */

/* Module 1 - Part 2
-------------------------------------------------- */

.part2 {

	}

/*/ Module 1 - Part 2
-------------------------------------------------- */

/* /Module 1
---------------------------------------------------------------------------------- */


/* Module 2
---------------------------------------------------------------------------------- */

.somecode2 {

	}

/* /Module 2
---------------------------------------------------------------------------------- */
```

You can use source-auxiliary.xml live templates from [SourceJS Live templates repo](https://github.com/sourcejs/sourcejs-live-templates).
For example, for the first level comment just type `ch1 + tab`.

### Document author

Please have this snippet located at the beginning of your stylesheet, bless you!
You don't code anonymously, right?

```stylus
/**
* author:       S Griffin | IM : contactme69 | e-mail : wdybih@gmail.com
* spec:         http://link
* created:      11/02/2013
*
* comments:		It's a nice example of CSS styleguide
* @project class:	.somecode
* @project colors:	#123123
**/
```

Seems redundant, but you've got the idea.

### CSSG

The project [CSSG](https://github.com/XOP/css-o-gram), that I've started not so long time ago is intended to improve readability and bring more transparency to your CSS.

Take a look at live example:

```stylus
/*

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