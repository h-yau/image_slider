import './style.css';
import testImage from './images/man.jpg';

// 1 image can be imported. Let's see how to import everything
const docBody = document.querySelector('body');

const man = document.createElement('img');
man.src = testImage;

docBody.appendChild(man);
