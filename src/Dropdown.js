const Dropdown = () => {

  // query for existing dropdown
  let dropdown = document.querySelector('.dropdown');

  // null check
  if (!dropdown) {

    // create new dropdown menu
    dropdown = document.createElement('ul');
    dropdown.classList.add('dropdown');


    // append dropdown menu to body element
    document.querySelector('body').appendChild(dropdown);
  }

  // dropdown method: add item
  const addItem = element => {

    // create list item
    const listItem = document.createElement('li');
    listItem.classList.add('dropdown-item');
    dropdown.appendChild(listItem);

    // append element to list item
    listItem.appendChild(element);
  };

  return { addItem };
}

export { Dropdown };