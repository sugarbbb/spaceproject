import './style.scss'

import Typed from 'typed.js';
import * as bootstrap from "bootstrap";
import ScrollReveal from "scrollreveal";



var options = {
  strings: ["teams.","startup.","business."],
  typeSpeed: 40,
  backDelay :1000,
  backSpeed :40,
  loop : true,
  smartBackSpace : false,

}; new Typed(".type",options);

const slideLeft = {
  distance: "90px",
  origin: "left",
  duration: 600,
  cleanup: true,
  easing: "ease-in",
  delay: 200,
};
ScrollReveal().reveal(".srleft", slideLeft);

const slideRight = {
  distance: "90px",
  origin: "right",
  duration: 600,
  cleanup: true,
  easing: "ease-in",
  delay: 200,
};
ScrollReveal().reveal(".srright", slideRight);

const slideTop = {
  distance: "90px",
  origin: "top",
  duration: 600,
  cleanup: true,
  easing: "ease-in",
  delay: 200,
};
ScrollReveal().reveal(".srtop", slideTop);


const slideBottom = {
  distance: "90px",
  origin: "bottom",
  duration: 800,
  cleanup: true,
  easing: "ease-in",
  delay: 200,
};
ScrollReveal().reveal(".srbottom", slideBottom);


