import React from 'react';
import '../SCSS/_navbar.scss';
import ResumeButton from "./ResumeButton.js"



function Navbar () {

  
      return (
        <div class="Menu">
          <ul class="Menu-list" data-offset="10">
            <li class="Menu-list-item" data-offset="20" onclick>
              01.   Home       
            </li>
            <li class="Menu-list-item" data-offset="16" onclick>
              02.   About     
            </li>
            <li class="Menu-list-item" data-offset="12" onclick>
              03.   Work     
            </li>
            <li class="Menu-list-item" data-offset="8" onclick>
              04.   Contact
            </li>
            <div class = "button-wrapper">
            <ResumeButton/>
            </div>
          </ul>
        </div>
  );
}


export default Navbar;
