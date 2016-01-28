## Structure of css/preprocessor file

CSS structure provides maintainability, scalability and any other -ability for the CSS code you wish for.  
Different methodologies propose different ways of organizing CSS files.  
Pros and cons of these approaches lay beyond the topic, so let's touch it slightly and focus on structure of single CSS file. 

Principles described below can be successfully adopted and integrated into existing system.


### Files organizing

The very basic option is to organize all code within _1_ file.  
This approach will work fine for small or/and one-time projects, that do not require maintainability whatsoever.
```
root/
    styles.css
```

For the sake of the guide goals and sanity this approach is not considered any further.

Consider file a CSS component.  
Components form the system:
```
css/
    navigation.css
    header.css
    layout.css
    ...
```

Large components may consist of multiple parts for the sake of readability:
```
css/
    header/
        header-layout.css (*)
        header-logo.css
        header-navigation.css
        ...
    ...
```
(*) notice the main component prefix, "header-" in this case. This is optional, but may solve search issues in IDE.

It can also be convenient to separate core modules - "atoms" and "molecules" - components, that consist of other components *or* unique and used just once:
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

Pure CSS modules rely on full encapsulation on all levels:
```
css/
   header/
       header.css
       Header.jsx
   article/
       article.css
       Article.jsx
   ...
```

Here 

### Code organization within a file

**[Code follow-up](example/_component-1.scss)**

Organization here is mostly about [comments](#comments) and consistency.  
As you can see, CSS component structure is pretty straightforward:

- [File data](#document-author) 
- [CSSG](#cssg)
- [Variables](#variables)
- Layout
- Parts
