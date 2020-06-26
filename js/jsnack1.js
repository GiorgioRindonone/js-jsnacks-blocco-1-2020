document.getElementById("btnjs1").addEventListener("click", function () {

var num1in = window.prompt("inserisci il primo numero ");
var num2in = window.prompt("inserisci il secondo numero");
var nummax = Math.max(num1in, num2in);

alert("Il numero maggiore è " + nummax);

});
