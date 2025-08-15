// Navbar scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//typing effect
function typewriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML='';
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}


const heroTitle = document.querySelector(".hero-text h1");
const herotitletext = heroTitle.textContent;
setTimeout(() => {
  typewriter(heroTitle,herotitletext , 130);
}, 0);

const heroptext =document.querySelector(".subtitle");
const heroTextContent = heroptext.textContent; 
setTimeout(() => {
  typewriter(heroptext ,heroTextContent  , 30);
}, 0);
