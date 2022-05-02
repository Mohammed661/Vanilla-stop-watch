var tens = 00;
var seconds = 00;
var appendTens = document.getElementById('tens');
var appendSeconds = document.getElementById('seconds');
var startButton = document.getElementById('startbutton');
var stopButton = document.getElementById('stopbutton');
var resetButton = document.getElementById('resetbutton');
var interval ; // to store time values

// This function work when click on start button
function setTimer(){
    tens++;
    if ( tens < 9 ){
        appendTens.innerHTML = '0' + tens;
    }
    if ( tens > 9 ){
        appendTens.innerHTML = tens ;
    }
    if ( tens > 99 ){
        seconds++
        appendSeconds.innerHTML = '0' + seconds;
        tens = 0;
        appendTens.innerHTML = '0' + 0 ;
    }
    if ( seconds < 9 ){
        appendSeconds.innerHTML = seconds;
    }
}

startButton.onclick = function(){
    interval = setInterval(setTimer)
};
stopButton.onclick = function(){
    clearInterval(interval)
};
resetButton.onclick = function(){
    clearInterval(interval)
    tens = 00;
    seconds = 00;
    appendTens.innerHTML = '0' + tens;
    appendSeconds.innerHTML = '0' + seconds;
};