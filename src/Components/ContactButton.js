/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../SCSS/_contactButton.scss';



function ContactButton () {
  
      return (
        <div id="container">
  <button class="learn-more">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <a href="mailto:bhandari.mihir2000@gmail.com" target="_blank" class="button-text">   Get in Touch!</a>
  </button>
</div>
  );
}


export default ContactButton;
