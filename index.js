const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("min");
const secondsElement = document.getElementById("sec");

const countDownDate = new Date("23 Dec 2022 ").getTime();
// console.log(countDownDate);

// update the count down every seconds
function markDown() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the difference between now and the count down date
  var difference = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  console.log(days);
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  console.log(hours);
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  console.log(minutes);
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  console.log(seconds);

  // Update the count down date)
  daysElement.innerText = days;
  hoursElement.innerText = formatTime(hours);
  minutesElement.innerText = formatTime(minutes);
  secondsElement.innerText = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(markDown, 1000);
