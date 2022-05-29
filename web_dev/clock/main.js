// main js file for clock website

class Time {
    constructor() {
        // date
        this.day = new Date().getDate();
        this.month = new Date().getMonth() + 1;
        this.year = new Date().getFullYear();

        // time
        this.second = new Date().getSeconds();
        this.minute = new Date().getMinutes();
        this.hour = new Date().getHours();
    }
}

function updateClock() {
    var currentDate = new Time().day + ':' + new Time().month + ':' + new Time().year;
    var currentTime = new Time().hour + ':' + new Time().minute + ':' + new Time().second;

    clockDate = document.createTextNode(currentDate);
    clockTime = document.createTextNode(currentTime);

    // set time
    document.getElementById('time').innerHTML = null;
    document.getElementById('time').appendChild(clockTime);

    // set date
    document.getElementById('date').innerHTML = null;
    document.getElementById('date').appendChild(clockDate);
}

function initClock() {
    updateClock();
    window.setInterval('updateClock()', 1);
}