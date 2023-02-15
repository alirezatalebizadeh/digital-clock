let hourInput = document.querySelector('#hour')
let minuteInput = document.querySelector('#minute')
let secondsInput = document.querySelector('#seconds')







function showDate() {
    let myTime = new Date()
    let hour = myTime.getHours()
    let minute = myTime.getMinutes()
    let second = myTime.getSeconds()

    if (hour < 10) {
        hour = `0${hour}`
    }
    if (minute < 10) {
        minute = `0${minute}`
    }
    if (second < 10) {
        second = `0${second}`
    }

    hourInput.innerHTML = hour
    minuteInput.innerHTML = minute
    secondsInput.innerHTML = second
}

setInterval(showDate, 1000)