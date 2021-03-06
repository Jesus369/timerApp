let timer = document.getElementById('timer')
let startButton = document.getElementById('startButton')
let stopButton = document.getElementById('stopButton')


let secondsOnes = 0
let secondsTens = 0
let minutes = 0

let startOfTimer = 0

startButton.addEventListener('click', function() {
  let beginTimer = window.setInterval(function() {

    timer.innerHTML = minutes + ":" + secondsTens + secondsOnes
    secondsOnes += 1

    if (secondsOnes <= 10) {
      timer.innerHTML = minutes + ":" + secondsTens + secondsOnes
    }
    if(secondsOnes >= 10) {
      timer.innerHTML = minutes + ":" + secondsOnes
    }
    if(secondsOnes === 59) {
      timer.innerHTML = minutes + ":" + secondsOnes
      minutes += 1
      secondsOnes = -1
    }
  },1000)

  stopButton.addEventListener('click', function() {
    let stopTimer = window.clearInterval(beginTimer)
  })

  clearButton.addEventListener('click', function(){
    timer.innerHTML = "0:00"
    minutes = 0
    secondsTens = 0
    secondsOnes = 0
    let stopTimer = window.clearInterval(beginTimer)
  })

})




let stopWatchTime = document.getElementById('stopWatchTime')
let secondsInput = document.getElementById('secondsInput')
let minutesInput = document.getElementById('minutesInput')
let startWatch = document.getElementById('startWatch')
let pauseWatch = document.getElementById('pauseWatch')
let clearWatch = document.getElementById('clearWatch')

minutes = 0
let seconds = 59

startWatch.addEventListener('click', function() {

    let countDownBegins = window.setInterval(function() {

      if (secondsInput.value <= 59 && secondsInput.value >= 1 ) {
        secondsInput.value -= 1
        stopWatchTime.innerHTML = minutes + ":" + secondsInput.value
      }

      if (minutesInput.value > 0) {
        stopWatchTime.innerHTML = (minutesInput.value - 1) + ":" + seconds
        seconds -= 1
        if (seconds < 10 && seconds >= 0) {
          seconds = "0" + seconds
        }
        if (seconds === -1) {
          minutesInput.value -= 1
          seconds = 59
        }
      }

    },1000)

    pauseWatch.addEventListener('click', function(){
      let stopTimer = window.clearInterval(countDownBegins)
    })

    clearWatch.addEventListener('click', function(){
      let stopTimer = window.clearInterval(countDownBegins)
      stopWatchTime.innerHTML = "0:00"
      minutes = 0
      seconds = 0
    })
})
