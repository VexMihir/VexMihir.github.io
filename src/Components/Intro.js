import React from 'react';
import '../SCSS/_intro.scss';
import ContactButton from "./ContactButton.js"

class Intro extends React.Component {

  render() {
      return (
        <header class="intro">
  <h1 class="intro__hello">Hi!
    <span class="emoji wave-hand animated"></span>
  </h1>

  <h2 class="intro__tagline">I'm
    <span class="name"> Mihir Bhandari</span>, something &amp; something
    <span class="emoji technologist"></span>
  </h2>

  <h3 class="intro__contact">
    <ContactButton/>
  </h3>
</header>

      

  );
}
}

export default Intro;
