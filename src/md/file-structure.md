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


### Code organizing within a file

**todo**


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