let time = 25
const timer = document.querySelector('.time-counter');
const startButton = document.querySelector('.start-button');

function decrementTime(){
    time--;
    timer.innerText = String(time).padStart(5,0);
    if (time < 0){
        location.reload();
    }
}

startButton.addEventListener('click', function(){
    setInterval(decrementTime, 1000)
});
