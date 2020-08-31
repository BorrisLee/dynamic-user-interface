// imports
import { Dropdown } from './Dropdown';
import { Slider } from './Slider';

// create dropdown menu
const myDropdown = Dropdown();

// create test items for dropdown
for (let i = 0; i < 10; i++){

  // create element
  const element = document.createElement('p');
  element.textContent = `test item ${i}`;

  myDropdown.addItem(element);
};

// create image slider
const mySlider = Slider();