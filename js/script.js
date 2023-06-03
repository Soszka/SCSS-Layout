import { dataSource } from './data.js';


// Settings

const select = {
  optMonumentsListSelector: '.monuments__list .row',
  optPreviewItemsListSelector: '.preview__carousel .carousel-inner'
}

const template = {
  monumentsItem: Handlebars.compile(document.querySelector('#template-monument-item').innerHTML),
  previewCarouselItem: Handlebars.compile(document.querySelector('#template-preview-carousel-item').innerHTML)
};


// Preview

function generatePreviewCarouselItems() {
  const carouselItemsList = document.querySelector(select.optPreviewItemsListSelector);
  const carouselItemsHTML = template.previewCarouselItem(dataSource);
  carouselItemsList.innerHTML = carouselItemsHTML;
  const firstCarouselItem = document.querySelector('.carousel-item');
  firstCarouselItem.classList.add('active');
}
generatePreviewCarouselItems();


// Monuments

function generateMonumentsItems() {
  const monumentsList = document.querySelector(select.optMonumentsListSelector);
  const monumentsHTML = template.monumentsItem(dataSource);
  monumentsList.innerHTML = monumentsHTML;
}
generateMonumentsItems();


// Entertain

