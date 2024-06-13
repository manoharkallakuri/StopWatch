window.onload = function() {
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;
    let appendMinutes = document.getElementById("minutes");
    let appendSeconds = document.getElementById("seconds");
    let appendMilliseconds = document.getElementById("milliseconds");
    
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    let invertal;

    const startTimer = () => {
        milliseconds++;
        if(milliseconds <= 9){
            appendMilliseconds.innerHTML = "0" + milliseconds;
        }
        if(milliseconds > 9){
            appendMilliseconds.innerHTML = milliseconds;
        }

        if(milliseconds > 99){
            seconds++;
            appendSeconds.innerHTML = '0' + seconds;
            milliseconds = 0;
            appendMilliseconds.innerHTML = '0' + 0;
        }
        
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }

        if(seconds > 59){
            minutes++;
            appendMinutes.innerHTML = '0' + minutes;        
            seconds = 0;
            appendSeconds.innerHTML = '0' + 0;
        }

    };

    startButton.onclick = () =>{
        clearInterval(invertal);
        invertal = setInterval(startTimer, 10);
    }

    stopButton.onclick = () =>{
        clearInterval(invertal);
    }

    resetButton.onclick = () =>{
        clearInterval(invertal);
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        appendMinutes.innerHTML = '0' + minutes;
        appendSeconds.innerHTML = '0' + seconds;
        appendMilliseconds.innerHTML = '0' + milliseconds;
    }

}