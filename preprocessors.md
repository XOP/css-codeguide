> update is coming up

## Preprocessors (SCSS, as an example)
All stuff above is valid for the CSS preprocessor code organizing with some peculiarities worth seeing.

### Structural comments
```css
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
```

### Nesting
```css
.weather {
	.cities {
		li {
			// 3 levels max!
			// 50 lines max! (should fit screen height)
			}
		}
	}
```

### Preprocessor-specific 
```css
// =====================================================================
// GLOBALS
// =====================================================================

// Links
// ---------------------------------------------------------------------

$a-main: '#eb722e';
$a-main__h: '#b84819';

$a-aux: '#449f14';
$a-aux__h: '#32710d'


// Colors
// ---------------------------------------------------------------------

$c-main: '#333';
$c-aux: '#666';
$c-brand: '#f00';


// Shadows
// ---------------------------------------------------------------------

// to be continued...
```

### Extending
```css
%standard {
	color: #333;
	background: white;
	}

// some code here

.standard {
	@extend %standard;
}

.myProjectStandard {
	@extend %standard;
	border: 1px solid;
	}
```

### Selectors and rules
```css
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
```
