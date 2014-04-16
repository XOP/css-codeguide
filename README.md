CSS Codeguide
=============

> Documentation for coding and maintaining the most transparent CSS 

## Structural comments

		/* Level 1
		---------------------------------------------------------------------------------- */
		
		.somecode {
		
			}
		
		/* /Level 1
		---------------------------------------------------------------------------------- */

		/* Level 2
		-------------------------------------------------- */
		
		.somecode {
		
			}
		
		/* /Level 2 */

		/* Level 3 */
		
		.somecode {
		
			}
		
		/* /Level 3 */

		/* Level 4 */
		.somecode {
		
			}

Example of this approach:

		/* Module 1
		---------------------------------------------------------------------------------- */
		
		.somecode1 {
		
			}
		
		/* Module 1 - Part 1
		-------------------------------------------------- */
		
		.part1 {
		
			}
		
		/* /Module 1 - Part 1 */
		
		/* Module 1 - Part 2
		-------------------------------------------------- */
		
		.part2 {
		
			}
		
		/* /Module 1 - Part 2 */
		
		/* /Module 1
		---------------------------------------------------------------------------------- */
		
		
		/* Module 2
		---------------------------------------------------------------------------------- */
		
		.somecode2 {
		
			}
		
		/* /Module 2
		---------------------------------------------------------------------------------- */

## Document author

Please have this snippet located at the beginning of your stylesheet, bless you!
You don't code anonymously, right?

		/**
		* author:       S Griffin | IM : contactme69 | e-mail : wdybih@gmail.com
		* spec:         http://link
		* created:      11/02/2013
		*
		* comments:		It's a nice example of CSS styleguide
		* @project class:	.somecode
		* @project colors:	#123123
		**/

Seems redundant, but you've got the idea.

## TODO-s

		/*
		    TODO: check if scroll needed >> refactor layer positioning
		    ? new mod __position
		    layers : media / video / [photo]
		*/

		/*
		    todo: Griffin - check extra padding
		*/

## Selectors and rules

Excessive example of writing CSS rules in order.  
The point here is visual and logic separation of rules.

		.class {
			position: relative;
			right: 0;
			left: 0;
			z-index: 77;
		
			display: inline-block;
			*display: inline;
			*zoom: 1;
			width:100%;
			height: 100%;
			overflow: hidden;
			margin: 0;
			padding: 4px 5px 5px;
			*padding: 2px 5px;
		
			border: #ccc solid 1px;
			border-top: #999 solid 1px;
			background: #fff;
			background-image: url(/images/icon.png);
		
			color: #333;
			line-height: 15px;
			font: 12px Arial, Helvetica, sans-serif;
			}

So-called *"Relative rules"* can be combined regardless usual order.  

		.class {
		    display: inline-block;
		    vertical-align: middle;
			}
		
		.class {
		    position: absolute;
		    left: 0; top: 0; right: 0; bottom: 0;
			}
		
		.class {
		    position: absolute;
		    z-index: 1000; /* reason for z-index */
			}
		
		.class {
		    width: 200px;
		    left: 50%; margin-left: -100px;
			}
		
		.class {
		    height: 100px;
		    top: 50%; margin-top: -50px;
			}
		
		.class {
		    height: 18px;
		    line-height: 18px;
			}

## Mandatory commenting

It's just a set of rules, that does worth commenting.  
You might want to come up with your own list, but this is the nice starting point.

		.project-class {
		    z-index: 31; /* reason for z-index */
		    margin-left: -616px; /* reason for negative margin */
		    -webkit-backface-visibility: hidden; /* reason for hack */
		    overflow: hidden; /* reason for overflow */
			}

## Selectors and selectors

		/* Elem
		-------------------------------------------------- */
		
		.elem{
			display: block;
			}
			.elem:hover {
				display: none;
				}
		
			.elem.__special {
				height: 180px;
				}
		
		    .elem_child {
			    background: red;
			    }
		
		.elem.__n1 { color: red; }
		.elem.__n2 { color: green; }
		.elem.__n3 { color: yellow; }
		
		.elem-elem {
			text-align: center;
			}
		
			.elem-elem_child {
				text-align: left;
				}
		        .elem-elem_child:first-child {
			        font-size: 10px;
			        }
				.elem-elem_child:before,
				.elem-elem_child:after {
					content: "";
					display: block;
					}
					.elem-elem_child:before:hover {
						opacity: .5;
						}
				.ie8 .elem-elem_child {
					font-size: 11px;
					}
		
		.elem-elem-foo,
		.elem-elem-goo,
		.elem-elem-bar {
			text-align: left;
			font-weight: bold;
			}
		
		.elem-elem-bar {
			color: red;
			}
		
		.elem-elem-bar {
			position: static;
			}
		
		/* /Elem */

## Exceptions

Reason for exceptional code-styling should be transparency and visual grace, not any other controversial idea.

		.mb-5 {margin-bottom: 5px;}
		.mb-10 {margin-bottom: 10px;}
		.mb-15 {margin-bottom: 15px;}
		.mb-20 {margin-bottom: 20px;}

		a.white:hover,
		.white_hover:hover {color:#eee;}

		.stub-img__32,
		.stub-img__40,
		.stub-img__50,
		.stub-img__128,
		.stub-img__150,
		.stub-img__180,
		.stub-img__190
			{
			background-repeat: no-repeat;
			}

## CSSG

The project [CSSG](https://github.com/XOP/css-o-gram), that I've started not so long time ago is intended to improve readability and bring more transparency to your CSS.  

Take a look at live example:

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

It's pretty easy to start and hard to resist hereafter.

## Preprocessors (SCSS, as an example)

All stuff above is valid for the CSS preprocessor code organizing with some peculiarities worth seeing.

### Structural comments

		// Level 1
		// ----------------------------------------------------------------------------------
		
		.somecode {
		
			}
		
		// /Level 1
		// ----------------------------------------------------------------------------------

		// Level 2
		// --------------------------------------------------
		
		.somecode {
		
			}
		
		// /Level 2

		// level 3
		
		.somecode {
		
			}
		
		// /level 3

		// Level 4
		.somecode {
		
			}

### Nesting

		.weather {
			.cities {
				li {
					// 3 levels max!
					// 50 lines max! (should fit screen height)
					}
				}
			}

### Preprocessor-specific 

		// =====================================================================
		// GLOBALS
		// =====================================================================
		
		// Links
		// ---------------------------------------------------------------------
		
		// basic
		
		$al: '#eb722e';
		$al_h: '#b84819';
		
		// aux
		
		$o: '#449f14';
		$o_h: '#32710d'
		
		// Colors
		// ---------------------------------------------------------------------
		
		// basic
		
		$cBlack: '#333';
		$cDark: '#666';
		
		// aux
		
		$cRed: '#f00';
		
		// Shadows
		// ---------------------------------------------------------------------
		
		// to be continued...

### Extending

		%standard {
			color: #333;
			background: white;
			}
		
		//// some code here
		
		.standard {
			@extend %standard;
		}
		
		.myProjectStandard {
			@extend %standard;
			border: 1px solid;
			}

### Selectors and rules

		.element {
			@extends %module;
			background: #000;
			@include transition(all 0.3s ease);
		
			> h3 {
				border-bottom: 1px solid white;
				@include transform(rotate(90deg));
				}
			}
		
		.element {
			$margin: '10px';
		
		    @extends .rounded-border;
		    @include data-module;
		
		    width: 400px;
		    height: 300px;
		    margin: 0 auto;
		    padding: 0;
		    cursor: pointer;
		
		    &:hover {
		        text-decoration: underline;
		    	}
		
		    & > li {
		        margin: $margin;
		    	}
		
		    & + ul {
		        margin-left: $margin;
		    	}
			}

## Extras

Take a look at some suggestions on [JS codeguide](js.md) provided as well. 

-----

Feel free to ask questions via [email](mailto:wdybih@gmail.com).  
All content is available for free distribution.  
[Link to source](https://github.com/XOP/css-codeguide) is mandatory when copying materials.