let hours = document.querySelector("#hour")
let minits = document.querySelector("#minit")
let seconds = document.querySelector("#second")
let day = document.querySelector("#day")


setInterval(() => {
    let hrs = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let currentDay = new Date().getDay()
    hours.innerHTML = hrs;
    minits.innerHTML = min;
    seconds.innerHTML = sec;
    let weekDays = ["Sun","Mon","Tue","Wed","thu","Fri","Sat"]
    day.innerHTML = weekDays[currentDay];
}, 10);


