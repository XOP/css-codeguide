## Methodology

Methodology we are using is called [Multilayer CSS](http://operatino.github.io/MCSS/en/) (MCSS).
Core methodology principles are based on [BEM](https://en.bem.info/). It consists of two important things:

1. Philosophy for structure of styles
2. Naming convention for selectors (see example below)

```stylus
.module-name {}
.module-name_child {}
.module-name_child_child-of-child {}
.module-name_child__modifier {}
```

Module interaction scheme
![Module interaction scheme](http://operatino.github.io/MCSS/images/layers.jpg)