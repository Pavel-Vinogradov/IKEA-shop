import {
  getData
} from "./getData.js";
import getSubCatalog from "./getSubcatalog.js";

export const catalogBlock = () => {

  const updateSubCatalog = getSubCatalog();
  const btnBurger = document.querySelector('.btn-burger');
  const catalog = document.querySelector('.catalog');
  const subCatalog = document.querySelector('.subcatalog');
  const btnClose = document.querySelector('.btn-close');
  const catalogList = document.querySelector('.catalog-list');
  const subCatalogHeader = document.querySelector('.subcatalog-header');
  const btnReturn = document.querySelector('.btn-return');

  const overlay = document.createElement('div');

  overlay.classList.add('overlay');

  document.body.append(overlay);

  const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
  };
  const closeMenu = () => {
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    closeSubMenu();
  };

  const heandlerCatalog = (event) => {
    event.preventDefault();

    const itemList = event.target.closest('.catalog-list__item');

    if (itemList) {
      subCatalogHeader.innerHTML = itemList.innerHTML;
      subCatalog.classList.add('subopen');
    }
    if (event.target.closest('.btn-close')) {
      closeMenu();
    }
  };

  const closeSubMenu = () => {
    subCatalog.classList.remove('subopen');
  };
  btnBurger.addEventListener('click', openMenu);
  btnClose.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  catalogList.addEventListener('click', heandlerCatalog);
  btnReturn.addEventListener('click', closeSubMenu);

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeMenu();
    }
  });
};