let interval;

let degrees = 0;

let isActive = false;

export default function startRotation(){
  const logo = document.querySelector('.logo')
  isActive = !isActive;
  if(isActive){
    interval =  setInterval(() => {
      if(degrees < 360){
        logo.style.transform = `rotate(${degrees}deg)`;
        degrees ++;
      } else {
        clearInterval(interval)
      }
    }, 50);
  } else {
    clearInterval(interval)
  };
}