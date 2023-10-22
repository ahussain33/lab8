function init(){
var textField = document.getElementById('entryinput');
  alertVal = ("Abiha Hussain:" + textField.value);
var button = document.getElementById('entrybutton');
var heading = document.getElementById('textoutput'); 
  headingchange = heading.innerHTML(textField);
  button.addEventListener('click', headingchange);
}
window.addEventListener('load', init);
