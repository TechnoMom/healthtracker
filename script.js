function showTime() {
  //this function shows the current date
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  now = new Date();
  let weekDay = days[now.getDay()];
  let month = months[now.getMonth()];
  let day = now.getDate();
  let year = now.getFullYear();

  return `${weekDay}, ${month} ${day}, ${year}`;
}

let time = document.querySelector("#time");
time.innerHTML = showTime();
