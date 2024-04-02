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

const createArrow = (arrow) => {
  const arrowDiv = document.createElement('div');
  arrowDiv.classList.add('arrow-div', arrow);

  const arrowButton = document.createElement('button');
  arrowButton.type = 'button';
  arrowButton.addEventListener('click', () => {
    const currentImage = document.querySelector('.current-slide');
    currentImage.classList.remove('current-slide');

    const temp = currentImage.nextElementSibling;
    console.log(temp);
    temp.classList.add('current-slide');
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

  // set default current image
  imageSlider.querySelector('.slide').classList.add('current-slide');

  imageSlider.appendChild(createArrow('left'));
  imageSlider.appendChild(createArrow('right'));
  return imageSlider;
};

const prepareImageSlider = () => {
  const docBody = document.querySelector('body');

  docBody.appendChild(createImageSlider());
};

prepareImageSlider();
