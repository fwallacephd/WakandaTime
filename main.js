moment.locale("en");
let NowMoment = moment().utcOffset("+03:00");
let eDisplayDate = document.getElementById('current-date-display');
eDisplayDate.innerHTML = NowMoment.format("dddd, MMMM Do YYYY");

let eDisplayTime = document.getElementById('current-time-display');
eDisplayTime.innerHTML = NowMoment.format('h:mm:ss a');

let eAlternateDisplay = document.getElementById('current-date-alternate-display');
eAlternateDisplay.innerHTML = NowMoment.format('MM-DD-YY, h:mm a, Z');

let hour = moment().hour();
console.log (hour);
