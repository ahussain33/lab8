function init(){
var textField = document.getElementById('entryinput');
  alertVal = ("Abiha Hussain:" + textField.value);
var button = document.getElementById('entrybutton');
  button.addEventListener('click', alert(alertVal));
}
window.addEventListener('load', init);
