var result = documet.getElementById("result6");

var btn6 = document.getElementById("bottone6");

btn6.addEventListener("click", function () {
var nome1 = prompt("inserisci il primo nome");
var nome2 = prompt("inserisci il secondo nome");

if (nome1.length > nome2.length) {
  result.innerHTML = ("il nome più lungo è" nome1);
  result.innerHTML = ("il nome più corto è" nome2);

} else if (nome2.length > nome1.length) {
  result.innerHTML = ("il nome più lungo è" nome2);
  result.innerHTML = ("il nome più corto è" nome1);
} else (nome2.length == nome1.length) {
  result.innerHTML = ("sono lunghi uguali");
}

});
