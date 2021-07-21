
let lastTime = localStorage.getItem("time");


let difference = (new Date() - Date.parse(lastTime)) / 1000 / 60 / 60 / 24;


if (!lastTime || difference < 1) {
  message = "Welcome to weather to go or not.";
} else if (difference == 1) {
  message = "Last visited " + parseInt(difference) + " day ago.";
} else {
  message = "Last visited " + parseInt(difference) + " days ago.";
}


document.querySelector("#lastVisited").textContent = message;


localStorage.setItem("time", new Date());