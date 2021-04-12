import './App.scss';
import Logo from './assets/webpack-logo.png';
import startRotation from './rotate.js';

function welcomeComponent(){

  const welcomeComponent = document.createElement('div');
  welcomeComponent.classList.add('welcome');

  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo');
  const logo = new Image();
  logo.src = Logo;
  welcomeComponent.appendChild(logoContainer);

  const welcomeText = document.createElement('p');
  welcomeText.textContent = 'Hello Webpack!';
  welcomeComponent.appendChild(welcomeText);
  
  const button = document.createElement('button');
  button.innerHTML = 'ROTATE ME';
  button.onclick = () => startRotation(logo);

  welcomeComponent.appendChild(button);
  return welcomeComponent;
};

document.body.appendChild(welcomeComponent());