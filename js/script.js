function init(){
  var button = document.getElementById("entrybutton");
  var input = document.getElementById("entryinput");
  button.addEventListener("click", heading);
  button.addEventListener("click", alert);
 
 function heading() {
    var output = document.getElementById("textoutput")
    output.innerHTML = input.value;
  }
 
  function alert() {
    text = ('Abiha Hussain: ' + input.value);
    alert(text);
  }
}
window.addEventListener('load', init);
