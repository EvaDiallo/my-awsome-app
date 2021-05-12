let weather = {
  Lausanne: {
    day: "Monday",
    temp: 21,
  },
  Paris: {
    day: "Tuesday",
    temp: 12,
  },
  Sidney: {
    day: "Wednesday",
    temp: 20,
  },
  NewYork: {
    day: "Thursday",
    temp: 12,
  },
  Tokyo: {
    day: "Friday",
    temp: 14,
  },
  Torento: {
    day: "Saturday",
    temp: 30,
  },
  Rome: {
    day: "Sunday",
    temp: 10,
  },
};

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
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

let currentDate = new Date();
let day = currentDate.getDay();
let daysD = days[day];
let hour = currentDate.getHours();
let month = currentDate.getMonth();
let monthsD = months[month];
let year = currentDate.getFullYear();
let minute = currentDate.getMinutes();
let cityDay = document.querySelector(".city-day");
cityDay.innerHTML = `${daysD} ${monthsD} ${year}<br />${hour}:${minute}`;

const axios = require("axios").default;

function showWeatherCondition(response) {
  let temperature = Math.round(response.data.main.temp);
  let cardTemp = document.querySelector(".temp");
  cardTemp.innerHTML = temperature;

  document.querySelector(".city").innerHTML = response.data.name;
  //let classCity = document.querySelector(".city");
  //classCity.innerHTML = city;
}

function search(e) {
  //console.log(response.data);
  e.preventDefault();
  let apiKey = "f730e91b30cbe17d7d77b0e941835ced";
  let city = document.querySelector("#input_form").value;
  //let city = "paris";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}`;
  console.log(apiUrl);
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showWeatherCondition);
}
let btn = document.querySelector(".d-flex");
btn.addEventListener("submit", search);
