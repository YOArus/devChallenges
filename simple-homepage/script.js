const element = document.body;
const logo = document.querySelector(".logo img");
const toggleButton = document.querySelector("#darkMode-toggle");

// functions
function darkMode() {
    element.classList.toggle('light-mode');

    if (element.classList.contains('light-mode')) {
        logo.src = "img/alarado-icon-hp-dark.svg";
    } else {
        logo.src = "img/alarado-icon-hp-dark-mode.svg";
     }
  };

  toggleButton.addEventListener("click", darkMode);

const nav = document.querySelector('#nav');
const menuBtn = document.querySelector('#menu');
const closeBtn = document.querySelector('#closeBtn');


menuBtn.addEventListener('click', () => {
    nav.classList.add('visible');

})


closeBtn.addEventListener('click', () =>{
    nav.classList.remove('visible');
    
})