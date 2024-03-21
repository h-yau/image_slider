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
    const image = document.createElement('img');
    image.src = srcImage;
    image.classList.add('slider-image');
    image.style.height = '20rem';

    imagesToAppend.push(image);
  });
  return imagesToAppend;
};

const createImageSlider = () => {
  const imageSlider = document.createElement('div');
  imageSlider.classList.add('image-slider');

  const imagesToAppend = populateImages();
  imagesToAppend.forEach((image) => {
    imageSlider.appendChild(image);
  });

  return imageSlider;
};

const prepareImageSlider = () => {
  const docBody = document.querySelector('body');

  docBody.appendChild(createImageSlider());
};

prepareImageSlider();
