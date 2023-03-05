const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime() {
const now = new Date()

const seconds = now.getSeconds();
const secondRotation = ((seconds/ 60) * 360) + 90;
secondHand.style.transform = `rotate(${secondRotation}deg)`;

const mins = now.getMinutes();
const minRotation = ((mins/ 60 ) * 360) + ((seconds/60)*6) + 90;
minHand.style.transform = `rotate(${minRotation}deg)`;

const hour = now.getHours();
const hourRotation = ((hour/ 12)* 360) + ((mins/60)*30) + 90;
hourHand.style.transform = `rotate(${hourRotation}deg)`;
}

setInterval(setTime, 1000);
setTime();