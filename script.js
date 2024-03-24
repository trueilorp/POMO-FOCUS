let time_minutes = 1;   
let time_seconds = 30; 
let duration = time_minutes * 60 + time_seconds;
const timer = document.querySelector('.time-counter');
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');

function paddedFormat(num) {
    return num < 10 ? '0' + num : num;
}
timer.textContent = `${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`;

function startFocus(){
    startButton.classList.add('hidden');
    stopButton.classList.remove('hidden');
}

function stopTimer(){
    stopTime();
    startButton.classList.remove('hidden');
    stopButton.classList.add('hidden');    
}

function timeOver() {
    alert("Frate, è l'ora di riposare!");
}

var alertShown = false;
let min = 0;
let sec = 0;
var decr;

function decrementTime(){
    duration--;
    min = parseInt(duration / 60);
    sec = parseInt(duration % 60);

    timer.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;

    if (duration < 0 && !alertShown){
        timeOver();
        alertShown = true;
        location.reload();
    }
}

function stopTime(){
    clearInterval(decr);
}

startButton.addEventListener('click', function(){
    startFocus()
});

startButton.addEventListener('click', function(){
    decr = setInterval(decrementTime, 1000);
});

stopButton.addEventListener('click', function(){
    stopTimer()
});

