setInterval(() => {
const time = document.querySelector("#time");

let date = new Date();
let hours = date.getHours();
let mins = date.getMinutes();
let seconds = date.getSeconds();
let day_night = "AM";
if(hours > 12){
    day_night ="PM";
    hours = "0" + hours - 12;
}

if (mins < 10 ) {
    mins = "0" + mins;
}

if(seconds < 10) {
    seconds = "0" + seconds;
}
time.textContent = hours + ":" + mins + ":" + seconds + day_night;
})


