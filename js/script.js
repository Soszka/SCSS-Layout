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

const colors = {
  borderGreen: 'green',
  boxShadowGreen: '0px 0px 15px green',
  borderBlue: 'rgb(0, 149, 255)',
  boxShadowBlue: '0px 0px 15px rgb(0, 149, 255)',
  borderRed: 'red',
  boxShadowRed: '0px 0px 15px red'
}


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



// Form


function formSubmitHandler(event) {
  event.preventDefault();

  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");
  const successMessage = document.querySelector(".form__message");

  const firstNameValue = firstNameInput.value;
  const lastNameValue = lastNameInput.value;
  const emailValue = emailInput.value;
  const phoneValue = phoneInput.value;
  const messageValue = messageInput.value;

  function hasNumericValue(value) {
    for (let i = 0; i < value.length; i++) {
      if (!isNaN(Number(value[i]))) {
        return true;
      }
    }
    return false;
  }

  function validatePhone(value) {
    const numericValue = Number(value);
    if (
      !isNaN(numericValue) &&
      numericValue >= 0 &&
      Number.isInteger(numericValue) &&
      value.length === 9
    ) {
      return true;
    } else {
      return false;
    }
  }

  function validateEmail(value) {
    const atIndex = value.indexOf("@");
    const dotIndex = value.lastIndexOf(".");
    if (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < value.length - 1) {
      return true;
    } else {
      return false;
    }
  }

  function isEmpty(value) {
    return value.trim() === "";
  }

  function isFieldValid(value) {
    return value.trim() !== "";
  }

  const isFirstNameNumeric = hasNumericValue(firstNameValue);
  const isLastNameNumeric = hasNumericValue(lastNameValue);
  const isPhoneValid = validatePhone(phoneValue);
  const isEmailValid = validateEmail(emailValue);
  const isMessageEmpty = isEmpty(messageValue);

  if (isFirstNameNumeric) {
    firstNameInput.style.borderColor = colors.borderRed;
    firstNameInput.style.boxShadow = colors.boxShadowRed;
    alert("Nieprawidłowe imię");
  } else {
    firstNameInput.style.borderColor = isFieldValid(firstNameValue) ? colors.borderGreen : colors.borderBlue;
    firstNameInput.style.boxShadow = isFieldValid(firstNameValue) ? colors.boxShadowGreen : colors.boxShadowBlue;
  }

  if (isLastNameNumeric) {
    lastNameInput.style.borderColor = colors.borderRed;
    lastNameInput.style.boxShadow = colors.boxShadowRed;
    alert("Nieprawidłowe nazwisko");
  } else {
    lastNameInput.style.borderColor = isFieldValid(lastNameValue) ? colors.borderGreen : colors.borderBlue;
    lastNameInput.style.boxShadow = isFieldValid(lastNameValue) ? colors.boxShadowGreen : colors.boxShadowBlue;
  }

  if (!isPhoneValid) {
    phoneInput.style.borderColor = colors.borderRed;
    phoneInput.style.boxShadow = colors.boxShadowRed;
    alert("Nieprawidłowy numer telefonu");
  } else {
    phoneInput.style.borderColor = isFieldValid(phoneValue) ? colors.borderGreen : colors.borderBlue;
    phoneInput.style.boxShadow = isFieldValid(phoneValue) ? colors.boxShadowGreen : colors.boxShadowBlue;
  }

  if (!isEmailValid) {
    emailInput.style.borderColor = colors.borderRed;
    emailInput.style.boxShadow = colors.boxShadowRed;
    alert("Nieprawidłowy adres email");
  } else {
    emailInput.style.borderColor = isFieldValid(emailValue) ? colors.borderGreen : colors.borderBlue;
    emailInput.style.boxShadow = isFieldValid(emailValue) ? colors.boxShadowGreen : colors.boxShadowBlue;
  }

  if (isMessageEmpty) {
    messageInput.style.borderColor = colors.borderRed;
    messageInput.style.boxShadow = colors.boxShadowRed;
    alert("Wiadomość jest wymagana");
  } else {
    messageInput.style.borderColor = isFieldValid(messageValue) ? colors.borderGreen : colors.borderBlue;
    messageInput.style.boxShadow = isFieldValid(messageValue) ? colors.boxShadowGreen : colors.boxShadowBlue;
  }

  if (!isFirstNameNumeric 
    && !isLastNameNumeric 
    && isPhoneValid 
    && isEmailValid 
    && !isMessageEmpty) {
    successMessage.style.display = "block";
    firstNameInput.style.borderColor = colors.borderBlue;
    firstNameInput.style.boxShadow = colors.boxShadowBlue;
    lastNameInput.style.borderColor = colors.borderBlue;
    lastNameInput.style.boxShadow = colors.boxShadowBlue;
    emailInput.style.borderColor = colors.borderBlue;
    emailInput.style.boxShadow = colors.boxShadowBlue;
    phoneInput.style.borderColor = colors.borderBlue;
    phoneInput.style.boxShadow = colors.boxShadowBlue;
    messageInput.style.borderColor = colors.borderBlue;
    messageInput.style.boxShadow = colors.boxShadowBlue;
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    messageInput.value = "";
  } else {
    successMessage.style.display = "none";
  }
}


function addEventListenerToForm() {
  const formContainer = document.querySelector('form');
  formContainer.addEventListener('submit', formSubmitHandler);
}
addEventListenerToForm()