function setTime() {
  let secondElement = document.querySelector("#s");
  let minuteElement = document.querySelector("#m");
  let hourElement = document.querySelector("#h");
  let am_pmElement = document.querySelector("#am_pm");

  let time = new Date();
  let second = time.getSeconds();
  let minute = time.getMinutes();
  let hour = time.getHours() % 12;
  let am_pm = time.getHours() >= 12 ? "PM" : "AM";

  secondElement.innerHTML = second 
  minuteElement.innerHTML = minute;
  hourElement.innerHTML = hour ;
  am_pmElement.innerHTML = am_pm;
}

setInterval(() => {
  setTime();
}, 1000);
