document.getElementById("bottone3").addEventListener("click", function () {
  var num = parseInt(prompt("inserisci il numero"));
  var bottonecolore = document.getElementById("jssnack3");

  if (num == 0) {
  bottonecolore.className = "blue";
  } else if (num%2 == 0) {
  bottonecolore.className = "green";
  } else {
  bottonecolore.classList.add("red");
  }
  });
