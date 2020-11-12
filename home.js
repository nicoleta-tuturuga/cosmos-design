const data = [
  {
    "id": 1,
    "img": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1087&q=80",
    "planetTitle": "ENCELADUS",
    "belongsTo": "The Saturn System",
    "distance": "9.5 AU",
    "population": "3920",
    "text1": "is the sixth-largest moon of Saturn. It is about a tenth of Saturn's largest moon, Titan.",
    "text2": "Explore this amazing cosmic marvel in a safe and fast trip with our aerospace company.",
    "ticketPrice": "999.990 €",
    "ticketDetails": "one way ticket"
  },
  {
    "id": 2,
    "img": "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "planetTitle": "STARS",
    "belongsTo": "The Stars",
    "distance": "150 AU",
    "population": "5000",
    "text1": "is the sixth-largest moon of Saturn. It is about a tenth of Saturn's largest moon, Titan.",
    "text2": "Explore this amazing cosmic marvel in a safe and fast trip with our aerospace company.",
    "ticketPrice": "799.130 €",
    "ticketDetails": "one way ticket"
  },
  {
    "id": 3,
    "img": "https://images.unsplash.com/photo-1548284706-24b96b23d6d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "planetTitle": "MOON",
    "belongsTo": "The Moon",
    "distance": "50 AU",
    "population": "0",
    "text1": "is the sixth-largest moon of Saturn. It is about a tenth of Saturn's largest moon, Titan.",
    "text2": "Explore this amazing cosmic marvel in a safe and fast trip with our aerospace company.",
    "ticketPrice": "199.160 €",
    "ticketDetails": "two way ticket"
  }
]

function showData(data) {
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    getItem(item, i);
  }
}

function getItem(data, index) {

  let sliderContainer = $('.slider-content-wrapper');

  let sliderWrapperItem = $('<div/>', {
    id: data.id,
    "class": 'slider-wrapper',
    style: index != 0 ? "display:none" : ""
  });
  let sliderImgWrapper = $('<div/>', {
    "class": 'slider-img-wrapper'
  });
  let itemImg = $('<img/>', {
    src: data.img,
    alt: data.planetTitle
  });
  let imgText = $('<div/>', {
    "class": 'img-text-container'
  });
  let planetTitle = $('<p/>', {
    text: data.planetTitle
  });
  let system = $('<p/>', {
    text: data.belongsTo
  });
  let distance = $('<p/>', {
    text: 'Distance: ' + data.distance
  });
  let population = $('<p/>', {
    text: 'Population: ' + data.population
  });
  let rectangleContainer = $('<div/>', {
    "class": 'rectangle-details-container'
  });
  let rectangleContainerTop = $('<div/>', {
    "class": 'rectangle-details-container-top'
  });
  let rectangleTitle = $('<p/>', {
    "class": 'rectangle-details-title',
    text: data.planetTitle
  });
  let rectangleDetailsText = $('<div/>', {
    "class": 'rectangle-details-text'
  });
  let paragraph1 = $('<p/>', {
    text: data.text1
  });
  let paragraph2 = $('<p/>', {
    text: data.text2
  });
  let rectangleContainerBottom = $('<div/>', {
    "class": 'rectangle-details-container-bottom'
  });
  let rectanglePrice = $('<p/>', {
    "class": 'rectangle-details-price',
    text: data.ticketPrice
  });
  let rectangleDetails = $('<p/>', {
    text: data.ticketDetails
  });
  let rectangleDetailsBtn = $('<button/>', {
    "class": 'rectangle-details-btn',
    text: 'BUY'
  })

  sliderWrapperItem.appendTo(sliderContainer);
  sliderImgWrapper.appendTo(sliderWrapperItem);
  itemImg.appendTo(sliderImgWrapper);
  imgText.appendTo(sliderImgWrapper);
  planetTitle.appendTo(imgText);
  system.appendTo(imgText);
  distance.appendTo(imgText);
  population.appendTo(imgText);
  rectangleContainer.appendTo(sliderWrapperItem);
  rectangleContainerTop.appendTo(rectangleContainer);
  rectangleTitle.appendTo(rectangleContainerTop);
  rectangleDetailsText.appendTo(rectangleContainerTop);
  paragraph1.appendTo(rectangleDetailsText);
  paragraph2.appendTo(rectangleDetailsText);
  rectangleContainerBottom.appendTo(rectangleContainer);
  rectanglePrice.appendTo(rectangleContainerBottom);
  rectangleDetails.appendTo(rectangleContainerBottom);
  rectangleDetailsBtn.appendTo(rectangleContainerBottom)
}

function showNextSlide() {
  $('.slider-content-wrapper > .slider-wrapper:first-child')
    .fadeOut(500)
    .next()
    .delay(500)
    .fadeIn(500)
    .end()
    .appendTo('.slider-content-wrapper');
}

function showPreviuosSlide() {
  $('.slider-content-wrapper > .slider-wrapper:first-child')
    .fadeOut(500)
  $('.slider-content-wrapper > .slider-wrapper:last-child')
    .prependTo(".slider-content-wrapper")
    .delay(500)
    .fadeIn(500)
}

function switchDarkMode() {
  $('.main-area').toggleClass('dark-mode');
  $('.rectangle-details-text > p').toggleClass('light-mode-text');
  $('.product-description-container > p').toggleClass('light-mode-text');
}

$(document).ready(function () {

  showData(data);

  $('.slider-btn-right').click(showNextSlide);
  $('.slider-btn-left').click(showPreviuosSlide);

  $('.dark-mode-btn').click(switchDarkMode);
})