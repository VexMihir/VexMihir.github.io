import React from 'react';
import '../SCSS/_experience.scss';

class Experience extends React.Component {


  render() {
      return (
        <section class="experience">
            <div class="experience__title">Experience</div>
  <div class="experience__content">
    <div class="jobs">
      <div class="jobs__job">
        <div class="jobs__time-place">
          <div class="jobs__job__company">
            <a href="https://rivian.com/" target="_blank">Rivian</a>
          </div>
          <div class="jobs__job__time">Sep 2021 - Apr 2022</div>
        </div>
        <div class="jobs__job__position">Mobile Applications Engineer and Tester Co-op</div>
      </div>
    </div>

    <a href="{{site.resume}}" target="_blank" class="arrow-link">View My Resume</a>
  </div>
</section>
      );
    }
}

export default Experience;
