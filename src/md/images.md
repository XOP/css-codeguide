## Images

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.
We are using some plugins, written in our team.
There are several plugins: for generating sprites, for generating x1 size images from x2 and for generating styles for retina.

### Sprites

We use [css-sprites-generator](https://github.com/cheshirsky/css-sprites-generator).
It is a tiny css sprites generator based on inline sprites definition and references.

Example:

```stylus
/** sprite: main-sprt; sprite-image: url('/img/sprites/main-sprt.png'); */

.my-main-page-icon {
    background-image: url('path/to/image.png'); /** sprite-ref: main-sprt; */
	}
```

Also we use mixin to handle sprites:

```stylus
//
// set sprite reference to background image
// @url - image url
// @name - sprite reference name
// @params - extra string of sprite params
sprite($url, $name, $params = ""){

	$extras = "";
	if $params {
		$extras = "; " + unquote($params);
	}

	$ref = unquote("/** sprite-ref: ") + unquote($name) + unquote($extras) + unquote("; */");
	background-image: url($url) $ref
	}
```

### Retina images

We use [grunt-retina-img plugin](https://github.com/odnoklassniki/grunt-retina-img).
It is a small Grunt task for generating background-images from x2 size to x1.

### Styles for retina

We use [grunt-retina-css plugin](https://github.com/odnoklassniki/grunt-retina-css).
It is a Grunt task for generating CSS with 2x background-images.
