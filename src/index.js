import './style.css';

// to import all images in the images folder
function importAll(r) {
  return r.keys().map(r);
}

const populateImages = () => {
  const imagesToAppend = [];

  const srcImages = importAll(
    require.context('./images/', false, /\.(png|jpe?g|svg)$/)
  );

  srcImages.forEach((srcImage) => {
    const slide = document.createElement('li');
    slide.classList.add('slide');

    const image = document.createElement('img');
    image.src = srcImage;
    image.classList.add('slider-image');

    slide.appendChild(image);

    imagesToAppend.push(slide);
  });
  return imagesToAppend;
};

const retrieveCurrentSlideIndex = () => {
  const slideArray = document.querySelectorAll('.slide');
  for (let i = 0; i < slideArray.length; i += 1) {
    if (slideArray[i].classList.contains('current-slide')) return i;
  }
};

const removeCurrentSlide = (index) => {
  const slideArray = document.querySelectorAll('.slide');
  slideArray[index].classList.remove('current-slide');
};

const applyCurrentSlide = (index) => {
  const slideArray = document.querySelectorAll('.slide');
  slideArray[index].classList.add('current-slide');
  const imageWidth = slideArray[index].getBoundingClientRect().width;

  const imageSlider = document.querySelector('.image-slider');
  imageSlider.style.transform = `translateX(-${imageWidth * index}px)`;
};

const changeSlide = (arrowDirection) => {
  const slideArray = document.querySelectorAll('.slide');
  let slideIndex = retrieveCurrentSlideIndex();
  removeCurrentSlide(slideIndex);

  slideIndex =
    arrowDirection === 'right'
      ? (slideIndex + 1) % slideArray.length
      : (slideIndex - 1 + slideArray.length) % slideArray.length;

  applyCurrentSlide(slideIndex);
};

const createArrow = (arrow) => {
  const arrowDiv = document.createElement('div');
  arrowDiv.classList.add('arrow-div', arrow);

  const arrowButton = document.createElement('button');
  arrowButton.type = 'button';
  arrowButton.addEventListener('click', () => {
    changeSlide(arrow);
  });

  arrowButton.classList.add('arrow', `arrow-${arrow}`);

  arrowDiv.appendChild(arrowButton);

  return arrowDiv;
};

const createImageSlider = () => {
  const imageSlider = document.createElement('ul');
  imageSlider.classList.add('image-slider');

  const imagesToAppend = populateImages();
  imagesToAppend.forEach((image) => {
    imageSlider.appendChild(image);
  });

  // set default current image on the first image
  imageSlider.querySelector('.slide').classList.add('current-slide');

  return imageSlider;
};

const setSlides = () => {
  const slideArray = document.querySelectorAll('.slide');
  const slideWidth = slideArray[0].getBoundingClientRect().width;
  for (let i = 0; i < slideArray.length; i += 1) {
    slideArray[i].style.left = `${slideWidth * i}px`;
  }
};

const instantiateCarousel = () => {
  const docBody = document.querySelector('body');

  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  carousel.appendChild(createImageSlider());
  carousel.appendChild(createArrow('right'));
  carousel.appendChild(createArrow('left'));

  docBody.appendChild(carousel);

  setSlides();
};

instantiateCarousel();
