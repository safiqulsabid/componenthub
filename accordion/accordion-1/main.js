/*
    Name: Accordion-1
    Author: ComponentHub and Md. Safiqul Islam Sabid
    Created by: https://github.com/safiqulsabid
    Description: A simple accordion component with plus and minus symbols.
    Version: 1.0.0
    License: MIT
    Created on: 01-11-2025
    Updated on: 01-11-2025
*/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}