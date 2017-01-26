// your code here:
document.addEventListener('DOMContentLoaded', function () {
  var reset = document.querySelector('#reset')
  var start = document.querySelector('#start')
  var pause = document.querySelector('#pause')

  var seconds = 0
  var timerId

  function updateTime () {
    seconds += 1
    document.querySelector('#timer').innerHTML = 'Time elapsed: ' + seconds
  }

  start.addEventListener('click', function () {
    timerId = setInterval(updateTime, 1000)
  })

  reset.addEventListener('click', function () {
    clearInterval(timerId)
    seconds = 0
    document.querySelector('#timer').innerHTML = 'Stop Watch'
  })

  pause.addEventListener('click', function () {
    clearInterval(timerId)
  })
})
