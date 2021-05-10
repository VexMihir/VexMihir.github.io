import React from 'react';
import '../SCSS/_navbar.scss';
import ResumeButton from "./ResumeButton.js"
import $ from 'jquery'



function Navbar () {
    var $menu = $('.Menu-list'),
    $item = $('.Menu-list-item'),
    w = $(window).width(), //window width
    h = $(window).height(); //window height

$(window).on('mousemove', function(e) {
  var offsetX = 0.5 - e.pageX / w, //cursor position X
      offsetY = 0.5 - e.pageY / h, //cursor position Y
      dy = e.pageY - h / 2, //@h/2 = center of poster
      dx = e.pageX - w / 2, //@w/2 = center of poster
      theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
      angle = theta * 180 / Math.PI - 90, //convert rad in degrees
      offsetPoster = $menu.data('offset'),
      transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

  //get angle between 0-360
  if (angle < 0) {
    angle = angle + 360;
  }

  //poster transform
  $menu.css('transform', transformPoster);

  //parallax for each layer
  $item.each(function() {
    var $this = $(this),
        offsetLayer = $this.data('offset') || 0,
        transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';

    $this.css('transform', transformLayer);
  });
});

  
      return (
        <div class="Menu">
          <ul class="Menu-list" data-offset="10">
            <li class="Menu-list-item" data-offset="20" onclick>
              Home
              <span class="Mask"><span>Home</span></span>
              <span class="Mask"><span>Home</span></span>
            </li>
            <div class="horizontalgap"></div>
            <li class="Menu-list-item" data-offset="16" onclick>
              About
              <span class="Mask"><span>About</span></span>
              <span class="Mask"><span>About</span></span>
            </li>
            <div class="horizontalgap"></div>
            <li class="Menu-list-item" data-offset="12" onclick>
              Work
              <span class="Mask"><span>Work</span></span>
              <span class="Mask"><span>Work</span></span>
            </li>
            <div class="horizontalgap"></div>
            <li class="Menu-list-item" data-offset="8" onclick>
              Contact
              <span class="Mask"><span>Contact</span></span>
              <span class="Mask"><span>Contact</span></span>
            </li>
            <div class="horizontalgap"></div>
            <div class = "button-wrapper">
            <ResumeButton/>
            </div>
          </ul>
        </div>
  );
}


export default Navbar;
