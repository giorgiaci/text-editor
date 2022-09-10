let clicks = 0;
let buttonClicks = 0;
let modalClicks = 0;
let defaultColor = "#cccccc";

let colorWell = document.querySelector("#colorWell");
let buttons = document.querySelectorAll('.btnCnt');
let modal = document.querySelectorAll('#colorWell');
let reset = document.querySelectorAll('#delete');
let textArea = document.querySelector("#text-editor");
let colorPicker = document.querySelector("#colorPicker");
let selectLanguage = document.querySelector("#selectLanguage");


/*CODE FOR CLICK DETECTION EVERYWHERE IN THE DOCUMENT*/
window.addEventListener('click', () => {
  clicks += 1;
  if (!document.activeElement.matches('#delete')) document.getElementById("clickCounter").innerHTML = clicks;
  return;
});

/*CODE FOR CLICK DETECTION ONLY ON BUTTONS*/
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttonClicks += 1;
    document.getElementById("buttonCounter").innerHTML = buttonClicks;
  })
});
/*CODE FOR RESET */
reset.forEach(r => {
  r.addEventListener('click', () => {
    clicks = 0;
    buttonClicks = 0;
    modalClicks = 0;
    colorWell.value = defaultColor;
    textArea.value = "";
    document.getElementById("clickCounter").innerHTML = 0;
    document.getElementById("buttonCounter").innerHTML = 0;
    document.getElementById("modalCounter").innerHTML = 0;
  })
});


/*CODE FOR CLICK DETECTION ONLY MODAL*/
modal.forEach(m => {
  m.addEventListener('click', () => {
    modalClicks += 1;
    document.getElementById("modalCounter").innerHTML = modalClicks;
  })
});

/*COLOR PICKER*/

window.addEventListener("load", startup, false);

function startup() {
  
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateColor, false);  
}
function updateColor(event) {
  if (textArea) {
    textArea.style.color = event.target.value;
    clicks += 1;
    modalClicks += 1;
    document.getElementById("clickCounter").innerHTML = clicks;
    document.getElementById("modalCounter").innerHTML = modalClicks;
  }
}

/*FONT PICKER*/

colorPicker.addEventListener("change", changeFont);
function changeFont() {

  var listValue = selectLanguage.options[selectLanguage.selectedIndex].text;
  document.getElementById("text-editor").style.fontFamily = listValue;
}