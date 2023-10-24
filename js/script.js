function init(){
 function myEventFunction(){
  var textField = document.getElementById('entryinput');
    alertVal = ("Abiha Hussain:" + textField.value);
    alert(alertVal);
 }
var button = document.getElementById('entrybutton');
  button.addEventListener('onclick', myEventFunction());
}
window.addEventListener('load', init);
