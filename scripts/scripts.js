/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

function updateMeter() {

  var meter = document.getElementById("progres-bar4");
  var currentValue = parseFloat(meter.getAttribute("value"));


  var increment = 0.1;

  var newValue = currentValue + increment;
  if (newValue > meter.max) {
      newValue = meter.max;  
  }
  meter.setAttribute("value", newValue);
}
