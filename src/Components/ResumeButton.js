import React from "react";
import "../SCSS/_resumeButton.scss";

function ResumeButton() {
  return (
    <div class="btn">
      <div class="btn-container">
        <a href ="https://drive.google.com/file/d/1d11KkR2mPYgi8v0HIy90X6Hj2kafvHJP/view?usp=sharing" target="_blank"><button class="resume">
          <span class="text">Resume</span>
          <div class="icon-container">
            <div class="icon icon--left">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10">
                <path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z" />
              </svg>
            </div>
            <div class="icon icon--right">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10">
                <path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z" />
              </svg>
            </div>
          </div>
        </button> </a>
      </div>
      <div class="btn-container">
        <a href = "https://github.com/VexMihir" target="_blank"><button class="resume">
          <span class="text">Projects</span>
          <div class="icon-container">
            <div class="icon icon--left">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10">
                <path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z" />
              </svg>
            </div>
            <div class="icon icon--right">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10">
                <path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z" />
              </svg>
            </div>
          </div>
        </button> </a>
      </div>
    </div>
  );
}

export default ResumeButton;