const StartBtn = document.querySelector(".Start");
const StopBtn = document.querySelector(".Stop");
const ResetBtn = document.querySelector(".Reset");
const Text = document.querySelector(".text")

let timerInterval = null;
let sec = 0;
let min = 0;
let hour = 0;

function updateDisplay() {
    Text.textContent = `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

StartBtn.addEventListener('click', function (){
    if (timerInterval === null){
        timerInterval = setInterval(function(){
            sec++;
            if (sec === 60) {
                sec = 0;
                min++;
                if (min === 60) {
                    min = 0;
                    hour++;
                }
            }
            updateDisplay();
        },10)
    }
});
StopBtn.addEventListener('click', function(){
    clearInterval(timerInterval);
    timerInterval = null;
} )
ResetBtn.addEventListener('click', function (){
    sec = 0
    min = 0
    hour = 0
    updateDisplay()
})