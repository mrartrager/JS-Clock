const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime() {
const now = new Date()
const seconds = now.getSeconds();
const secondRotation = 
console.log(seconds)

const mins = min.getMinuets();
const minRotation = 

const hour = now.getHours();
const hourRotation = 
}

setInterval(setTime, 1000)