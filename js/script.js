import { dataSource } from './data.js';


// Settings

const select = {
  monumentsListSelector: '.monuments__list .row',
  previewItemsListSelector: '.preview__carousel .carousel-inner',
  entertainLinksListSelector: '.entertain__list ul',
  entertainItemsListSelector: '.entertain__items'
}

const template = {
  monumentsItem: Handlebars.compile(document.querySelector('#template-monument-item').innerHTML),
  previewCarouselItem: Handlebars.compile(document.querySelector('#template-preview-carousel-item').innerHTML),
  entertainLink: Handlebars.compile(document.querySelector('#template-entertain-link').innerHTML),
  entertainItem: Handlebars.compile(document.querySelector('#template-entertain-item').innerHTML),
};


// Preview

function generatePreviewCarouselItems() {
  const carouselItemsList = document.querySelector(select.previewItemsListSelector);
  const carouselItemsHTML = template.previewCarouselItem(dataSource);
  carouselItemsList.innerHTML = carouselItemsHTML;
  const firstCarouselItem = document.querySelector('.carousel-item');
  firstCarouselItem.classList.add('active');
}
generatePreviewCarouselItems();


// Monuments

function generateMonumentsItems() {
  const monumentsList = document.querySelector(select.monumentsListSelector)
  const monumentsHTML = template.monumentsItem(dataSource);
  monumentsList.innerHTML = monumentsHTML;
}
generateMonumentsItems();


// Entertain

function generateEntertainLinks() {
  const entertainLinksList = document.querySelector(select.entertainLinksListSelector);
  const entertainLinkHTML = template.entertainLink(dataSource);
  entertainLinksList.innerHTML = entertainLinkHTML;
  const firstEntertainLink = document.querySelector('.entertain__list a');
  firstEntertainLink.classList.add('active');
  console.log(firstEntertainLink);
}
generateEntertainLinks()


function generateEntertainItems() {
  const entertainItemsList = document.querySelector(select.entertainItemsListSelector);
  const entertainItemHTML = template.entertainItem(dataSource);
  entertainItemsList.innerHTML = entertainItemHTML;
  const firstEntertainItem = document.querySelector('.entertain__item ');
  firstEntertainItem.classList.add('active');
}
generateEntertainItems()


function entertainClickHandler(event) {
  event.preventDefault();
  const activeLink = document.querySelector('.entertain__list a.active');
  activeLink.classList.remove('active');
  const clickedLink = this;
  clickedLink.classList.add('active');
  const entertainItemId = clickedLink.getAttribute('href');
  const activeEntertainItem = document.querySelector('.entertain__items .active');
  activeEntertainItem.classList.remove('active');
  const targetEntertainItem = document.querySelector(entertainItemId);
  targetEntertainItem.classList.add('active');
}

function addClickListenersToEntertainLinks() {
  let links = document.querySelectorAll('.entertain__list a');
  for (let link of links) {
    link.addEventListener('click', entertainClickHandler);
  }
}
addClickListenersToEntertainLinks();


