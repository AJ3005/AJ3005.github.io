let lastUpdate = document.lastModified;
var d = new Date();
var n = d.getFullYear();
function lastUpdated() {
  document.getElementById("updated").innerHTML="Last Updated: " + lastUpdate;
  document.getElementById("copy").innerHTML= "©" + n + " | Austin Jordan";
}

function fribanner() {
  var day=new Date();
  var now=day.getDay();
  if (now==5) {
    document.getElementById("date").classList="today";
  }
}

function callFuncts() {
  lastUpdated();
  fribanner();
}

function toggleMenu() {
  console.log(document.getElementById("primaryNav").classList);
  document.getElementById("primaryNav").classList.toggle("hide");
}