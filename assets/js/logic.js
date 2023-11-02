var timeEl = document.getElementById('time')
var startButtonEl = document.getElementById('start')


// event for start button being clicked - start timer
startButtonEl.addEventListener("click", function() {
    timerCountdown()
})


// timer countdown
function timerCountdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {

        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            time.textContent = timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            time.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
}
