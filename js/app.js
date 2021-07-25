const hourSpan = document.querySelector("#hour");
const minutesSpan = document.querySelector("#minutes");
const secondsSpan = document.querySelector("#seconds");
const hoursSpan = document.querySelector("#hours");
const millisecondsSpan = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let stopwatch;
let [milliseconds, seconds, minutes, hours] = [10, 0, 0, 0];
const formatValue = (value) => (value < 10 ? "0" + value : value);

function startStopWatch() {
  milliseconds += 10;

  if (milliseconds === 1000) {
    milliseconds = 10;
    seconds += 1;

    if (seconds === 60) {
      milliseconds = 10;
      seconds = 0;
      minutes += 1;

      if (minutes === 60) {
        milliseconds = 10;
        seconds = 0;
        minutes = 0;
        hours += 1;

        if (hours === 24) {
          milliseconds = 10;
          seconds = 0;
          minutes = 0;
          hours = 0;
        }
      }
    }
  }

  millisecondsSpan.innerText = formatValue(milliseconds);
  secondsSpan.innerText = formatValue(seconds);
  minutesSpan.innerText = formatValue(minutes);
  hoursSpan.innerText = formatValue(hours);
}

startBtn.addEventListener("click", () => {
  stopwatch = setInterval(startStopWatch, 10);
});

stopBtn.addEventListener("click", () => {
  clearInterval(stopwatch);
});

resetBtn.addEventListener("click", () => {
  [milliseconds, seconds, minutes, hours] = [10, 0, 0, 0];

  millisecondsSpan.innerText = "0" + formatValue(0);
  secondsSpan.innerText = formatValue(seconds);
  minutesSpan.innerText = formatValue(minutes);
  hoursSpan.innerText = formatValue(hours);

  clearInterval(stopwatch);
});
