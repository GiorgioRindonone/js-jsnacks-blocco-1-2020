
var btn = document.getElementById("bottone5")
btn.addEventListener("click", function () {
var numero1 = parseInt(document.getElementById("numero1").value);
var numero2 = parseInt(document.getElementById("numero2").value);
var op = document.getElementById("operazione");
var result = document.getElementById("result");

if (op=0) {
  result.innerHTML = "Seleziona un'operazione";
} else if (op=1) {
  result.innerHTML = (numero1 + numero2) ;
} else if (op=2) {
  result.innerHTML = (numero1 - numero2) ;
} else if (op=3) {
  result.innerHTML = (numero1 * numero2) ;
} else {
  result.innerHTML = (numero1 / numero2) ;
}

});
