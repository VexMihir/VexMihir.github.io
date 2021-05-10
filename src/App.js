import './SCSS/Main.scss';
import Switch from "./Components/Switch.js"
import Navbar from "./Components/Navbar.js"
import Intro from "./Components/Intro.js"
import ContactButton from "./Components/ContactButton.js"

function App() {
 const colors = ["#3CC157", "#2AA7FF", "#FCBC0F", "#F85F36"];
  const numBalls = 40;
  const particles = [];



 window.onload = function() {

  for (let i = 0; i < numBalls; i++) {
    let particle = document.createElement("particle");
    particle.classList.add("ball");
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
  
    particle.style.right = `${Math.floor(Math.random() * 100)}vw`;
    particle.style.top = `${Math.floor(Math.random() * 100)}vh`;
  
    particle.style.transform = `scale(${Math.random()})`;
    particle.style.width = `${Math.random()}em`;
    particle.style.height = particle.style.width;
    
    particles.push(particle);
    document.body.append(particle);
  } 

 const d = new Date();
  const hours = d.getHours();
  const night = hours >= 19 || hours <= 7;
  const body = document.querySelector('body');
  const toggle = document.getElementById('toggle');
  const input = document.getElementById('switch');



  if(night) {
    input.checked = true;
    body.classList.add('night');
  }

  toggle.addEventListener('click', function() {
    const isChecked = input.checked
    
    if (isChecked) {
      body.classList.remove('night');
    } else {
      body.classList.add('night');
    }
  }); 



// Keyframes
particles.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };
  
  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
  });  
} 
 
  return (
    <div classname = "main">
      <Navbar/>
      <div class = "spacer">
      </div>
      <Switch/>
      <Intro/>
    </div>
  );
}

export default App;
