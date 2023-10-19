const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("radio");

if (myParam == null)
  document.getElementById("rating").innerHTML =
    "You have not selected any value";
else
  document.getElementById("rating").innerHTML =
    "You selected " + myParam + " out of 5";
