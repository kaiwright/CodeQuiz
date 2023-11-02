var startButtonEl = document.getElementById('start')
var questionEl = document.getElementById('questions')
var startEl = document.getElementById('start-screen')




startButtonEl.addEventListener("click", function () {
    // show question screen
    questionEl.setAttribute("class", "start")
    // hide start screen
    startEl.setAttribute("class", "hide")
});

