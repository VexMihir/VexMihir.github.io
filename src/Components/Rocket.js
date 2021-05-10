import React from 'react';
import '../SCSS/_base.scss';
import arrow from '../Images/arrow.png'

class Rocket extends React.Component {

  
  render() {
      return (
          <button id = "rocket-button">
             <img src = {arrow} alt = "" />
          </button>
  );
}
}

export default Rocket;