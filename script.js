let hrs = document.querySelector("#hrs");
let mins = document.querySelector("#mins");
let secs = document.querySelector("#secs");
let section = document.querySelector("#section");

const displayTime = () => {
  let hr = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();

  if (hr >= 12) {
    section.innerHTML = " PM";
  } else {
    section.innerHTML = " AM";
  }

  if (sec < 10) {
    sec = "0" + sec;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (hr > 12) {
    hr = hr - 12;
    hr = "0" + hr;
  }

  hrs.innerHTML = hr;
  mins.innerHTML = min;
  secs.innerHTML = sec;
};

setInterval(displayTime, 1000);
