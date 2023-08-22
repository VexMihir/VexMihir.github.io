import React from 'react';
import '../SCSS/_skills.scss';

class Skills extends React.Component {


  render() {
      return (
        <section class="skills">
  <div class="skills__title">Skills</div>
  <div class="skills__content">
    <table class = "skills__table">
      <tr>
        <th>Languages</th>
        <th>Tools/Technologies</th>
        <th>Web</th>
      </tr>
      <tr>
        <td>Java</td>
        <td>Git</td>
        <td>HTML 5</td>
      </tr>
      <tr>
        <td>Kotlin</td>
        <td>Node.js/Express</td>
        <td>React</td>
      </tr>
      <tr>
        <td>Swift</td>
        <td>Postman</td>
        <td>SCSS/CSS</td>
      </tr>
      <tr>
        <td>JavaScript</td>
        <td>MongoDB</td>
        <td>Redux</td>
      </tr>
      <tr>
        <td>TypeScript</td>
        <td>JUnit</td>
        <td>Tailwind</td>
      </tr>
      <tr>
        <td>Python</td>
        <td>Appium</td>
        <td>Material UI</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>GraphQL</td>
        <td></td>
      </tr>
    </table>
  </div>
</section>
      );
}
}

export default Skills;
