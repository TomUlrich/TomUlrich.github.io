# Portfolio Website

>

## Table of Contents

## To do

**WE CSS Übungen**

- [Ein-/Aus-Schalter im iOS-Stil](https://de.webmasters-europe.org/my-account/my-courses/1916/modules/1943/classes/2701/chapters/adde315ce55e7514358a94f66d9b6a5f)

- Flip Cards:
  https://de.webmasters-europe.org/my-account/my-courses/1916/modules/1943/classes/2701/chapters/588078b5ddca08e43aced464844e7b45

- [CSS Tabs](https://de.webmasters-europe.org/my-account/my-courses/1916/modules/1943/classes/2701/chapters/e029316690e2c903653aa572a7ebaff8)

- [vw/vh:](https://de.webmasters-europe.org/my-account/my-courses/1916/modules/1943/classes/2701/chapters/3c196e05e2efa5608640f7c9dd8e553b)
  1vw = 1% der Breite des Anzeigefensters (viewport width)
  1vh = 1% der Höhe des Anzeigefensters (viewport height)
  1vmin = 1vw oder 1vh, je nachdem, welche der beiden kleiner ist
  1vmax = 1vw oder 1vh, je nachdem, welche der beiden größer ist

<!-- - [Giant Font Size Bug vermeiden:](https://de.webmasters-europe.org/my-account/my-courses/1916/modules/1943/classes/2701/chapters/ae44ff197381e8d93c8841daf6b2d721)

```css
html {
  font-size: 100%;
}

body {
  font-size: 1em;
}
``` -->

- [mask & background-clip](https://de.webmasters-europe.org/my-account/my-courses/1916/modules/1943/classes/2701/chapters/5338971ecfdf5c00b349d62d208c8f9b)

- [normalize.css](https://github.com/csstools/normalize.css/)

- Start screen: Text Portrait, Animated coding text
- ...a Berlin based webdeveloper + BerlinSVG

- carousel slide-up when tapping (for mobile advices)
- carousel slide-up only till text is ending

<!-- - CSS darkmode colors -->

<!-- - nav bar instead of hamburger button for desktop -->

- [Web Accessibility](https://wave.webaim.org/)

- carousel.css durch flipcards ersetzen

- z-indizes & positions (solved):

  ```css
  <!--z-index: carousel vs. top-bar --> #carousel {
    position: relative;
    z-index: -10; /* negative index works, but no hover-effect anymore */
  }
  <!--solved: --> header {
    z-index: 2;
  }
  ```

## Useful ressources

### Links & Buttons

- w3docs: [How to Add an HTML Button that Acts Like a Link
  ](https://www.w3docs.com/snippets/html/how-to-create-an-html-button-that-acts-like-a-link.html)

- w3schools: [CSS Buttons](https://www.w3schools.com/csS/css3_buttons.asp)

- CSS Tricks: [Links & Buttons](https://css-tricks.com/a-complete-guide-to-links-and-buttons/)

### Colors

- [Color variables](https://medium.com/codyhouse/create-your-design-system-part-3-colors-798e4729921f)

### Carousel

Carousel image sizes: 500px x 375px

[Window.getComputedStyle()](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)

[getPropertyValue()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue)

[Show additional content on hover](https://www.30secondsofcode.org/css/s/hover-additional-content/)

[:focus-within (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within)

[:focus-within (CSS-Tricks)](https://css-tricks.com/almanac/selectors/f/focus-within/)

[Smooth scroll-behavior CSS Property](https://www.w3schools.com/cssref/pr_scroll-behavior.php)

[CodePen: Scroll Right and left using JavaScript](https://codepen.io/immad-hamid/pen/yEmayr)

[w3schools: The scrollTop and scrollLeft Properties](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_scrollleft2)

[JavaScriptTutorial: Get and Set Scroll Position of an Element
](https://www.javascripttutorial.net/dom/css/get-and-set-scroll-position-of-an-element/)

https://calculateaspectratio.com/
https://www.cronyxdigital.com/blog/the-ultimate-website-image-guide

### How to find the width of a div

- https://stackoverflow.com/questions/4787527/how-to-find-the-width-of-a-div-using-vanilla-javascript

- https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements

### How to get the browser viewport dimensions

- https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions#8876069

- https://www.decodingweb.dev/javascript-get-viewport-width-and-height

### Build a Responsive, Mobile First Website - HTML5 & CSS3

- https://www.youtube.com/watch?v=XsEnj-1hG2o

### Slideshow / Lightbox Tutorial

- [YouTube: Create A Draggable Image Slider in HTML CSS & JavaScript](https://www.youtube.com/watch?v=7HPsdVQhpRw)
- [CodingNepal: Create A Draggable Image Slider in HTML CSS & JavaScript](https://www.codingnepalweb.com/draggable-image-slider-html-css-javascript/)

---

- [YouTube: How to make Responsive Card Slider in HTML CSS & JavaScript](https://www.youtube.com/watch?v=qOO6lVMhmGc)
- [codepen: Voyage Slider](https://codepen.io/dev_loop/pen/MWKbJmO)
- [YouTube: How To make Responsive Multiple Image Slider](https://www.youtube.com/watch?v=joRSe4TymV0)
- [w3schools: How TO - Slideshow](https://www.w3schools.com/howto/howto_js_slideshow.asp)
- [w3docs: How to Create an Image Slider or Slideshow](https://www.w3docs.com/snippets/css/how-to-create-an-image-slider-or-slideshow.html)
- [codepen: GSAP Slider](https://codepen.io/gvrban/pen/qjbpaa)

### CSS position:absolute in position:relative

- https://www.mediaevent.de/css/positionieren-absolut-relativ-float.html

### Images

- https://calculateaspectratio.com/
- https://www.cronyxdigital.com/blog/the-ultimate-website-image-guide

### Breakpoints

- https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/
- https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp
- https://www.mediaevent.de/css/breakpoints.html
- [resize window tool](http://www.brianapps.net/sizer/)

### Hamburger Menu tutorial:

- https://alvarotrigo.com/blog/hamburger-menu-css-responsive/
- https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
- https://www.mediaevent.de/tutorial/css-transform.html
- https://webdeasy.de/css-hamburger-menus/

## What I learned

### CSS Visibility vs Display

_Read_ [_full article_](https://www.tutorialrepublic.com/css-tutorial/css-visibility.php) _on TutorialRepublic._

The display and visibility CSS properties appear to be the same thing, but they are in fact quite different and often confuse those new to web development.

`visibility: hidden;` hides the element, but it still takes up space in the layout. Child element of a hidden box will be visible if their visibility is set to visible.
`display: none;` turns off the display and removes the element completely from the document. It does not take up any space, even though the HTML for it is still in the source code. All child elements also have their display turned off, even if their display property is set to something other than none.

### The white-space Property

![white-space property](/Portfolio-NEU/img/README.md/white-space-2.PNG)

```

```

```

```
