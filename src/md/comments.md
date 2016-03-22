## Comments

Comments are _vital_ and sadly often underestimated.

In total, all code, that potentially might raise questions later, should be commented.  
Comments have to be short, capacious and up-to-date. Avoid excessive (unnecessary) commenting.

There are generally _two_ types of comments:  
- Structural comments (were briefly introduced in [previous chapter](#code-organization-within-a-file))
- All other comments will be covered right away!


### Structural comments

:page_with_curl: **[Code follow-up](example/_component-1.scss)**

These comments help to keep your CSS organized, consistent and way more readable.
Consider each inner level a deeper nested element or modifier - this metaphor helps to get the image.

**Level 1** is typically a component / file title.

```css
/* Level 1
---------------------------------------------------------------------------------- */

/* code */

/* /Level 1
---------------------------------------------------------------------------------- */
```

At the moment there might be questions - where _exactly_ to place the code?  
Is the block padding a normal thing?  

As it comes to practical side - this is the matter of choice, habit and team preferences.  
This may work for you...

```css
/* Element title
---------------------------------------------------------------------------------- */
.element {
    
}
/* /Element title
---------------------------------------------------------------------------------- */
```

...as fine as this:
```css
/* Element title
---------------------------------------------------------------------------------- */

.element {
    
}

/* /Element title
---------------------------------------------------------------------------------- */
```

For this code guide we'll stick with the **second** option.

But generally it does not matter.  
Choose the style and stick with it. Working in team implies identical code-styling, and different code examples should look like written by one person.

**Level 2** is for structure per se. Variables, Layout, component parts: Head, generic Right part, Content section etc.  

```css
/* Level 2
-------------------------------------------------- */

/* code */

/* /Level 2
-------------------------------------------------- */
```

**Level 3** and **Level 4** normally would be used seldom. However, you may consider them for more complex component structures, something like part of a part of a part.

**Level 3:**

```css
/* Level 3 */

/* code */

/* /Level 3 */
```

**Level 4:**

```css
/* Level 4 */
/* code */
```

Common rules for structural comments:
- Respect _level order_ - Level 2 should be placed only inside Level 1, Level 4 only inside Level 3 etc.
- Indentation is prohibited, that means each new comment block organizes a "caret return" (this will be demonstrated later)

To improve readability use 2 whitespaces between level 1 and level 2 blocks. Use 1 whitespace between all others.  
Again, it's only a recommendation. Stick with what works best for you.

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


/* Modification */

.part-1--modifier {

}

/* /Modification */

/* /Module - Part 1
-------------------------------------------------- */


/* Module - Part 2
-------------------------------------------------- */

.part-2 {

}

/*/ Module - Part 2
-------------------------------------------------- */

/* /Module
---------------------------------------------------------------------------------- */
```

:bulb:  

It's not convenient to type these slashes and dashes by hand or copy paste the pieces of code all the time.  
There's a bunch of tools to bring fun to the boredom.

For instance, there are snippets from [IDE cross-project live templates repo](https://github.com/XOP/live-templates). Based on [Live Templates](https://www.jetbrains.com/idea/help/live-templates.html) they are compliant with most of [Jetbrains](https://www.jetbrains.com/) products.

:zap: 

Snippets for Sublime Text is the work in progress.


### Document author

Having this piece of code at the top of the file immediately answers many questions, especially when the file is to be seen for the first time.  

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
 so it's just a suggestion. Fields can easily be added ot removed at the every stage of code-style integration.

There's also a snippet for that in [live templates repo](https://github.com/XOP/live-templates).


### CSSG

The main idea behind [CSSG](http://cssg.rocks) project is bringing extra transparency to the common CSS codebase.

Simply put, it's a meta-language that uses CSS comments for html (_-module_) documenting.

Here's an example:

```css
/*
cssg

	media                   --special | --custom
	    media__header
	        ...
	        
	    media__content
	        a . media__link
	            <icon>
	            
	        media__text
	            ...

*/
```

It's pretty easy to start and hard to resist hereafter.

Seems obvious now, but there's a snippet for that as well in the [live templates repo](https://github.com/XOP/live-templates).  
In fact, there's a common `bs` (bootstrap) template that just gets you ready with all basic things. 


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
    FIXME: 17.08.2015
*/
```

Of course these things colud be easily combined:
```css
/*
    TODO: stewie.griffin@acmecorp.com - cleanup with the feature "PhotoMarks" - 21.09.2015
    check and fix dependent components
*/
```

One extra healthy point here is to limit the number of **"todo"** expressions due to better organization.


### How to comment code

So far it should be pretty clear how to create structure in CSS file, leave author notes and prepare ground for the code landing.  

Since it appears, your main concern with regards to styleguide, will be code maintainability. Respect some basic rules and you will be safe:
- leave comments to improve readability
- avoid unnecessary comments that harm readability
- too many 'TODO'-s - it's time to refactor the whole thing

Also, there is a couple of best practices, that worth mentioning:
- always comment magic numbers and tricky approaches
- separate variables' and values' concerns

Some clarification is needed here:

**Always comment "magic numbers" and tricky approaches**

Not mentioning typical hacks, some rules deserve being noticed.
If values like `z-index: 14;` or `margin: -137px auto;` make total sense today - try to figure it out after a month (clue - you'll never do).

```scss
.project-class {
    margin-top: 13px; // pixel-moving, probably?
    font-size: 1.66rem; // reason for non-standard value
    }
```

**Values and Variables - separation of concerns**

When using variables it is important to pay attention to values that just _do not fit_.
Generally it's a _bad idea_ to combine variables with regular units.

Avoid situations like this:

```scss
$offset = 10px;

.project-class {
    padding: $offset ($offset + 3px); // by design
	}
```


### Preprocessor syntax specifics

Preprocessors introduce JS-style of comments:

```scss
/* traditional comment */
.foo {
}

// "inline" comment
.bar {
}
```

"Inline" comments can be used in the absolutely same manner along with the "block" comments.
Possible, but _not desired_ outcome of that:

```scss
//
// Foo component
.foo {
    overflow: hidden !important; // need this to override inline

    color: $color-main;


    /* parent context */
    .bar & {
        padding: 1rem;
    }
}

/*
    todo: replace Foo with Tar
*/
.bar {
    padding: 0 calc(100% - 980px); /* page restrictions */
}
```

This example is exaggerated on purpose.
The point is - to prevent visual pollution some code-guide conventions required.

Here's the proposition:
1. _Everywhere but inside_ of curly braces (consider "rule scope") use "block" comments. Practical examples can be found [earlier in this chapter](#structural-comments).
2. On the contrary, use "inline" comments only _inside_ of curly braces. This will come more and more handy with intensive using of preprocessor features - nesting, & - selection etc.

With these in mind, let's "fix" the previous example:

```scss
/* Foo
-------------------------------------------------- */

.foo {
    overflow: hidden !important; // need this to override inline

    color: $color-main;

    // parent context
    .bar & {
        padding: 1rem;
    }
}

/* /Foo
-------------------------------------------------- */


/* Bar
-------------------------------------------------- */

/* TODO: replace with Tar */

.bar {
    padding: 0 calc(100% - 980px); // page restrictions
}

/* /Bar
-------------------------------------------------- */
```

Don't mind the "&"-usage, nesting and all other formatting specifics yet.
This is the scope of the [following chapter](#syntax--formatting).


### Mandatory commenting

Some CSS rules _deserve_ to be commented. This practice has been proved by time.
There is pretty brief list of such rules, which sure is not dogmatic.

Feel free to come up with your own list, here's the nice starting point:

- `z-index`
- `margin (with negative value)`
- `overflow: hidden`
- `translate3d(0)` or `-webkit-backface-visibility`

...


### To recap

Follow a common rule:

> _Do not_ rely on your memory or memory of your colleagues

Just comment suspicious values.
Thank yourself later.
