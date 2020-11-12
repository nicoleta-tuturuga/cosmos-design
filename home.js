const data = [
  {
    "id": 1,
    "img": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1087&q=80",
    "imgTitle": "hi",
    "rectangleTitle": "Enceladus",
    "rectangleParagraph1": "is the sixth-largest moon of Saturn. It is about a tenth of Saturn's largest moon, Titan.",
    "rectangleParagraph2": "Explore this amazing cosmic marvel in a safe and fast trip with our aerospace company.",
    "rectanglePrice": "999.990 €",
    "rectangleDetails": "one way ticket"
  },
  {
    "id": 2,
    "img": "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "imgTitle": "hello",
    "rectangleTitle": "Stars",
    "rectangleParagraph1": "is the sixth-largest moon of Saturn. It is about a tenth of Saturn's largest moon, Titan.",
    "rectangleParagraph2": "Explore this amazing cosmic marvel in a safe and fast trip with our aerospace company.",
    "rectanglePrice": "89.290 €",
    "rectangleDetails": "one way ticket"
  },
  {
    "id": 3,
    "img": "https://images.unsplash.com/photo-1548284706-24b96b23d6d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "imgTitle": "good",
    "rectangleTitle": "Moon",
    "rectangleParagraph1": "is the sixth-largest moon of Saturn. It is about a tenth of Saturn's largest moon, Titan.",
    "rectangleParagraph2": "Explore this amazing cosmic marvel in a safe and fast trip with our aerospace company.",
    "rectanglePrice": "290.780 €",
    "rectangleetails": "two way ticket"
  }
]

function showData(data) {
  console.log(data)
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    getItem(item,i);
  }
}

function getItem(data,index) {

  let sliderContainer = $('.slider-content-wrapper');
  
  let sliderWrapperItem = $('<div/>', {
    class: 'slider-wrapper',
    style:index!=0?"display:none":""
  });
  
  let itemImg = $('<img/>', {
    src: data.img,
    alt: data.rectangleTitle
  });
  let rectangleContainer = $('<div/>', {
    "class": 'rectangle-details-container'
  });
  let rectangleContainerTop = $('<div/>', {
    "class": 'rectangle-details-container-top'
  });
  let rectangleTitle = $('<p/>', {
    "class": 'rectangle-details-title',
    text: data.rectangleTitle
  });
  let rectangleDetailsText = $('<div/>', {
    "class": 'rectangle-details-text'
  });
  let paragraph1 = $('<p/>', {
    text: data.rectangleParagraph1
  });
  let paragraph2 = $('<p/>', {
    text: data.rectangleParagraph2
  });
  let rectangleContainerBottom = $('<div/>', {
    "class": 'rectangle-details-container-bottom'
  });
  let rectanglePrice = $('<p/>', {
    "class": 'rectangle-details-price',
    text: data.rectanglePrice
  });
  let rectangleDetails = $('<p/>', {
    text: data.rectangleDetails
  });
  let rectangleDetailsBtn = $('<button/>', {
    "class": 'rectangle-details-btn',
    text: 'BUY'
  })

  sliderWrapperItem.appendTo(sliderContainer);
  itemImg.appendTo(sliderWrapperItem);
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
  console.log('NEXT');
  console.log($('.slider-content-wrapper > .slider-wrapper:first-child'));
  jQuery('.slider-content-wrapper > .slider-wrapper:first-child')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.slider-content-wrapper');

}

$(document).ready(function () {

  showData(data);

  $('.slider-btn-right').click(showNextSlide);

})