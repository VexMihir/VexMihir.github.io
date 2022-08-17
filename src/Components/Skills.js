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
        <td>C++</td>
        <td>Postman</td>
        <td>React</td>
      </tr>
      <tr>
        <td>Kotlin</td>
        <td>JIRA</td>
        <td>SCSS</td>
      </tr>
      <tr>
        <td>Swift</td>
        <td>Command Line</td>
        <td>JavaScript</td>
      </tr>
      <tr>
        <td>TypeScript</td>
        <td>Appium</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Python</td>
        <td>LaTeX</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>JSON</td>
        <td></td>
      </tr>
    </table>
  </div>
</section>
      );
}
}

export default Skills;
