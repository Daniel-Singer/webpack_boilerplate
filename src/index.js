import './App.scss';
import Logo from './assets/webpack-logo.png';

const welcomeComponent = () => {

  const div = document.createElement('div');
  div.className = 'placeholder';

  const image = document.createElement('img');

  image.src = Logo;

  div.appendChild(image);

  const h1 = document.createElement('h1');
  h1.textContent = 'Hello Webpack'

  div.appendChild(h1);

  return div;
}



document.body.appendChild(welcomeComponent());