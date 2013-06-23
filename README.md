# tinyFader.js

> It's a jQuery plugin, it's tiny... and it fades stuff, capiche?

## Usage

HTML

```html
<div class="tiny-fader--container">
  <img class="tiny-fader--img" href="image-one.jpg" alt="Image One" />
  <img class="tiny-fader--img" href="image-two.jpg" alt="Image Two" />
  <img class="tiny-fader--img" href="image-three.jpg" alt="Image Three" />
</div>
```

JavaScript

```javascript
;(function ($) {

  $('.tiny-fader--container').tinyFader({
    element: '.tiny-fader--img',
    speed:   700
  });

})(jQuery);
```
