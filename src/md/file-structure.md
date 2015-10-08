## Structure of css/preprocessor file

CSS structure provides maintainability, scalability and any other -ability for the CSS code you wish for.  
Different methodologies propose different ways of organizing CSS files.  
Pros and cons of these approaches lay beyond the topic, so let's focus on structure of single CSS file. 

Principles described below can be succesfully adopted and integrated into existing system.


### Files organizing

Consider file a CSS module.  
Modules form the system:
```
css/
    navigation.css
    header.css
    layout.css
    ...
```

Large modules may consist of multiple parts for the sake of readability:
```
css/
    header/
        header-layout.css
        header-logo.css
        header-navigation.css
        ...
    ...
```

It can also be convenient to separate core modules - "atoms" and "molecules" - modules, that consist of other modules *or* unique and used just once:
```
css/
    base/
        icon.css
        logo.css
        navigation.css
        ...
    project/
        shopping-cart.css
        article-section.css
        ...
    ...
```

Pure CSS modules rely on full incapsulation on all levels:
```
css/
   header/
       header.css
       [header.js]
   article/
       article.css
       [article.js]
```


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

```stylus
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
* @project colors:	#f0f0f0, #ffe1e1
**/
```

Seems redundant, but you've got the idea.


### CSSG

The main idea behind [CSSG](http://cssg.rocks) project is bringing transparency to the common CSS codebase.
In a nutshell, it's a meta-language that uses CSS comments for module documenting.

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
