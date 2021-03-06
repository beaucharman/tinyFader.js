/**
 * tinyFader.js
 * ========================================================================
 * jquery.tinyFader.js
 * @version   1.0 | June 16th 2013
 * @author    Beau Charman | @beaucharman | http://www.beaucharman.me
 * @link      https://github.com/beaucharman/tinyFader.js
 * @license   MIT license
 * @param     {object}
 *              {integer} duration
 *              {integer} speed
 *              {string} element
 * @return    {jQuery object}
 *
 * Tiny jQuery element fader plugin
 * ======================================================================== */
;(function ($) {
  'use strict';

  $.fn.tinyFader = function (options) {

    var settings = $.extend({
      duration: 8000,
      speed:    500,
      element: 'img'
    }, options);

    return this.each(function () {

      var $container = $(this);

      $container
        .css('position', 'relative')
        .find(settings.element)
          .css('position', 'absolute')
        .end()
        .find(settings.element + ':gt(0)')
          .hide();

      setInterval(function () {
        $container.find(':first-child')
          .fadeOut(settings.speed)
          .next(settings.element)
            .fadeIn(settings.speed)
          .end()
          .appendTo($container);
      }, settings.duration);

    });
  };
})(jQuery);