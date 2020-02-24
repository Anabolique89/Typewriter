"use strict";
window.addEventListener("DOMContentLoaded", start);

function start() {
  let typeWriter = document.getElementById("type-writer");
  let dataText = typeWriter.getAttribute("data-text");

  let count = 0;
  let dataTextLength = dataText.length;

  let setText = () => {
    setTimeout(() => {
      typeWriter.textContent += dataText.charAt(count);
      count++;
      if (count <= dataTextLength) {
        setText();
      }
    }, 75);
  };

  //function typewriter(element, callback){

  window.onload = () => {
    setText();
  };
}
