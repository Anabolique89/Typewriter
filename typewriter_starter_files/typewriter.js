"use strict";

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

window.onload = () => {
  setText();
};
