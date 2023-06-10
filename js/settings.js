const select = {
  monumentsListSelector: '.monuments__list .row',
  previewItemsListSelector: '.preview__carousel .carousel-inner',
  entertainLinksListSelector: '.entertain__list ul',
  entertainItemsListSelector: '.entertain__items',
  natureItemsListSelector: '.nature__gallery',
  educationItemsListSelector: '.education .accordion',
  styleLightLink: document.querySelector('link[href="css/styleLight.css"]'),
  styleDarkLink: document.querySelector('link[href="css/styleDark.css"]'),
  darkLabel: document.querySelector('label[for="dark"]'),
  lightLabel: document.querySelector('label[for="light"]')
};

const template = {
  monumentsItem: Handlebars.compile(document.querySelector('#template-monument-item').innerHTML),
  previewCarouselItem: Handlebars.compile(document.querySelector('#template-preview-carousel-item').innerHTML),
  entertainLink: Handlebars.compile(document.querySelector('#template-entertain-link').innerHTML),
  entertainItem: Handlebars.compile(document.querySelector('#template-entertain-item').innerHTML),
  natureItem: Handlebars.compile(document.querySelector('#template-nature-item').innerHTML),
  educationItem: Handlebars.compile(document.querySelector('#template-education-item').innerHTML),
};

const colors = {
  borderGreen: 'green',
  boxShadowGreen: '0px 0px 15px green',
  borderBlue: 'rgb(0, 149, 255)',
  boxShadowBlue: '0px 0px 15px rgb(0, 149, 255)',
  borderRed: 'red',
  boxShadowRed: '0px 0px 15px red'
};

export {select, template, colors}