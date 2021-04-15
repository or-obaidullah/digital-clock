// Analog Clock
setInterval(setClock, 1000);
const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

function setClock() {
    const currentTime = new Date();
    const secondRatio = currentTime.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentTime.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentTime.getHours()) / 60;
    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
}
setClock()
function setRotation(id, rotationRatio) {
    id.style.setProperty('--rotation', rotationRatio * 360);
}
// Digital Clock
setInterval(() => {
    const time = document.getElementById('time');
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dayNight = "AM";
    if (hours > 12) {
        dayNight = "PM";
        hours = hours - 12;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + dayNight;
});