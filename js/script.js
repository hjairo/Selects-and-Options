/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Selects and Options - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";

  const selectAShirt = document.querySelector('option[value="Select a shirt"]'); 
  selectAShirt.hidden = true;

  const shirtSelectElement = document.querySelector('#shirt-select-element');
  const shirtOptionElements = document.querySelectorAll('#shirt-select-element option');

  console.log(shirtSelectElement);
  console.log(shirtOptionElements);
  const blueShirtSelected = shirtOptionElements[2];
  console.log(blueShirtSelected);
  blueShirtSelected.selected = true;

/**
 * Event listener for checkboxes
 */
shirtSelectElement.addEventListener('change', (event) => {

  console.log(event.target.value);
  const shirtImage = document.querySelectorAll('.shirt-image');
  for (let i = 0; i <= shirtImage.length; i++) {
    let altShirtImage = shirtImage[i].alt;

    let clickedEvent = event.target.value;
    console.log(altShirtImage);
    console.log(clickedEvent);
    if (altShirtImage === clickedEvent) {
      shirtImage.classList.add('chosen');
    } else {
      shirtImage.classList.remove('chosen');
    }
  };
  console.log("The select element's change event listener is functional!");
});