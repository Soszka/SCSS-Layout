import { dataSource } from './data.js';


// Settings

const select = {
  monumentsListSelector: '.monuments__list .row',
  previewItemsListSelector: '.preview__carousel .carousel-inner',
  entertainLinksListSelector: '.entertain__list ul',
  entertainItemsListSelector: '.entertain__items',
  natureItemsListSelector: '.nature__gallery',
  educationItemsListSelector: '.education .accordion'
}

const template = {
  monumentsItem: Handlebars.compile(document.querySelector('#template-monument-item').innerHTML),
  previewCarouselItem: Handlebars.compile(document.querySelector('#template-preview-carousel-item').innerHTML),
  entertainLink: Handlebars.compile(document.querySelector('#template-entertain-link').innerHTML),
  entertainItem: Handlebars.compile(document.querySelector('#template-entertain-item').innerHTML),
  natureItem: Handlebars.compile(document.querySelector('#template-nature-item').innerHTML),
  educationItem: Handlebars.compile(document.querySelector('#template-education-item').innerHTML),
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


// Nature

function generateNatureItems() {
  const natureItemsContainer = document.querySelector(select.natureItemsListSelector);
  const natureItemHTML = template.natureItem(dataSource);
  natureItemsContainer.innerHTML = natureItemHTML;
}
generateNatureItems();

function natureClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  const activeLinks = document.querySelectorAll('.nature__links')
  console.log(activeLinks);
  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  clickedElement.classList.add('active');
  const activeItems = document.querySelectorAll('.nature__gallery__item');
  for (let activeItem of activeItems) {
    activeItem.classList.remove('active');
  }
  const targetItemsId = clickedElement.getAttribute('href');
  const targetItems = document.querySelectorAll(targetItemsId);
  for (let targetItem of targetItems) {
    targetItem.classList.add('active')
  }
}

function addClickListenersToNatureLinks() {
  let links = document.querySelectorAll('.nature__links')
  for (let link of links) {
    link.addEventListener('click', natureClickHandler);
  }
}
addClickListenersToNatureLinks();

// Education

function generateEducationItems() {
  const educationItemsContainer = document.querySelector('.education .accordion');
  const educationItemHTML = template.educationItem(dataSource);
  educationItemsContainer.innerHTML = educationItemHTML;
}
generateEducationItems();

function zmienFlushColapseOne() {
  var drugiElement = document.querySelector('#flush-collapseOne');
  var trzeciElement = document.querySelector('#flush-collapseOne');
  var drugiButton = document.querySelector('#flush-collapseOne button');
  var trzeciButton = document.querySelector('#flush-collapseOne button');

  drugiElement.setAttribute('data-bs-target', '#flush-collapseTwo');
  trzeciElement.setAttribute('data-bs-target', '#flush-collapseThree');
  drugiElement.setAttribute('aria-controls', 'flush-collapseTwo');
  trzeciElement.setAttribute('aria-controls', 'flush-collapseThree');
  drugiButton.setAttribute('data-bs-target', '#flush-collapseTwo');
  trzeciButton.setAttribute('data-bs-target', '#flush-collapseThree');
  drugiButton.setAttribute('aria-controls', 'flush-collapseTwo');
  trzeciButton.setAttribute('aria-controls', 'flush-collapseThree');
}
zmienFlushColapseOne()