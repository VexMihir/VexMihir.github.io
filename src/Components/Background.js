import React from 'react';
import '../SCSS/_background.scss';

class Background extends React.Component {


  render() {
      return (
        <section class="section">
  <div class="section__title">Background</div>
  <div class="section__content">
    <p>
      I'm currently a third year student at &nbsp;
      <a class="underline-link" href="https://www.ubc.ca/" target="_blank"> University of British Columbia</a>
    </p>

    <p>
      As a software engineer, I enjoy bridging the gap between engineering and design &mdash; combining my technical knowledge
      with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable
      and efficient under the hood while providing engaging, pixel-perfect user experiences.
    </p>

    <p>
      <strong>When I'm not in front of a computer screen</strong>, I'm probably at the gym, exploring the city,
      or crossing off another item on my bucket list.
    </p>
  </div>
</section>
  );
}
}

export default Background;
