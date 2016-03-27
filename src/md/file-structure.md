## Structure of СSS/preprocessor file

CSS structure is the kernel of the architecture.   
Different methodologies propose different ways of organizing CSS files.  
Pros and cons of these approaches are beyond the topic, so let's touch it slightly and focus on structure of single CSS file. 

Principles described below can be successfully adopted and integrated into existing system.


### Files organizing

:page_with_curl: **[Code follow-up](example/)**

The very basic option is to organize all code within _one_ file.  
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


### Code organization within a file

:page_with_curl: **[Code follow-up](example/_component-1.scss)**

Organization here is mostly about [comments](#comments) and consistency.  
Generally, as you can see, CSS component structure is pretty straightforward:

- [File data](#document-author)
- Component title
- [CSSG](#cssg)
- [Variables](#variables)
- Layout
- Parts
- Modifiers
- States

Please notice, that except for Component title _all_ other parts can be omitted, according to the situation:

**[File data](#document-author)** is the privilege of the team preferences, it might be excessive when working alone.

**[CSSG](#cssg)** is not needed when component consists of one element and almost "flat" in terms of cascade.

**[Variables](#variables)** have nothing to do with CSS yet (except for [--custom-properties](https://drafts.csswg.org/css-variables/)) and pretty much optional if there are no local overrides or any other local properties.

**Layout** is basically a component wrapper or skeleton, which might have modifiers applied to the descendants. It makes most sense when component itself is relatively complex.

**Parts**, **Modifiers** and **States** however are also optional, when component consists of one element, like button or link and relatively plain.

:bulb: Media-query-specific rules are not decoupled from the main ones. There's more about media-queries handling in [one of the following](#@-rules) chapters.
