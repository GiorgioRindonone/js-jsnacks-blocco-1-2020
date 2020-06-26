
        document.getElementById("bottone4").addEventListener("click", function (){

          var elemento = document.getElementById("numero");

          var max = 10;
          var min = 1;

          var num = Math.floor(Math.random () * (max - min + 1) + min);

          elemento.classList.add("pari", "dispari");

          if (num%2 == 0) {
            elemento.classList.remove("pari");
          } else {
            elemento.classList.remove("dispari");
          }

          elemento.innerHTML = num ;

        });
