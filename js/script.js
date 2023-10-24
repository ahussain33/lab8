function init(){
 function myEventFunction(){
  var textField = document.getElementById('entryinput');
    alertVal = ("Abiha Hussain:" + textField.value);
    alert(alertVal);
 }
var button = document.getElementById('entrybutton');
  button.addEventListener('click', myEventFunction());
}
window.addEventListener('load', init);
