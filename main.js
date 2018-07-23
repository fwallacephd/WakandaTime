moment.locale("en");
let NowMoment = moment().utcOffset("+03:00");

let displayDate = document.getElementById('current-date-display');
displayDate.innerHTML = NowMoment.format("dddd, MMMM Do YYYY");

let displayTime = document.getElementById('current-time-display');
displayTime.innerHTML = NowMoment.format('h:mm:ss a');

let alternateDisplay = document.getElementById('current-date-alternate-display');
alternateDisplay.innerHTML = NowMoment.format('MM-DD-YY, h:mm a, Z');

let hour = moment().hour();

