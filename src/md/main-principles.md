## Main principles

As it comes from the title, this chapter is about principal ways to do CSS.

There are **two major trends** nowadays.


### The first 

...is the oldest school and thus most popular.  
It can be described with the following statements:

- one or several stylesheets in the `<head>` via the `<link>` tag
- `normalize.css` or `reset.css` prior to the main CSS
- some rules may be inlined in `<style>` to deal with the _browser issues_ 
- the order of rules is extremely important 
- the cascade takes it's toll as well
- inline styling is far less prominent and used only for specific features


### The second

...is heavily influenced by developing of JS frameworks, namely [React JS](https://facebook.github.io/react/) and the following spreading of corresponding CSS conceptions - [Radium](https://github.com/FormidableLabs/radium), [CSS modules](https://github.com/css-modules/css-modules) and some others.

What is this all about?

- CSS is controlled and maintained via JS
- inline styles over traditional external ones
- cascade and rules order almost do not matter

In fact, [here](https://speakerdeck.com/vjeux/react-css-in-js) is the presentation, covering all interesting points.


### What's more

Of course different combinations of the mentioned practices exist and appear from time to time.  
Further in the guide we'll stick to the classic approach.

Two reasons for backing this up:

1. Traditional system is way more popular and requires more attention
2. Second model is playing mostly on the JS field and slightly off the topic
 
This does not mean that supporters of the latter won't find anything useful here.  
In many ways CSS remains the same and these systems have many points of contact. 
