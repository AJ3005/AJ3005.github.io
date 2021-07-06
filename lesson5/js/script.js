let lastUpdate = document.lastModified;
var d = new Date();
var n = d.getFullYear();
function lastUpdated() {
  document.getElementById("updated").innerHTML="Last Updated: " + lastUpdate;
  document.getElementById("copy").innerHTML= "©" + n + " | Austin Jordan";
}


function callFuncts() {
  lastUpdated();
}

function toggleMenu() {
  console.log(document.getElementById("primaryNav").classList);
  document.getElementById("primaryNav").classList.toggle("hide");
}

const dayNumber = today.getDay();
const element = document.getElementById("message");
console.log(dayNumber);
if (dayNumber == 5) {
    element.classList.add("showme");
}

else {
    element.classList.add("hideme");
}