menu.onclick = function clickMenu() {
  let x = document.getElementById('topMenu');

  if (x.className === 'menu__list') {
    x.className += ' responsive';
  } else {
    x.className = 'menu__list';
  }
};

