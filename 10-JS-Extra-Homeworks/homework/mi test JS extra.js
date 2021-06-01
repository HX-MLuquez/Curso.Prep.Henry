function capicua(numero){
    //Escribe una función, la cual recibe un número y determina si es o no capicúa.
    //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
    //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
    //Escribe tu código aquí
    var aReverse = numero.toString().split('').reverse().join('');
    var numberReverse = Number(aReverse);
    if (numero === numberReverse) {
        console.log("Es capicua")
    } else {
        console.log("Es capicua")
    }
  }

  capicua(346)


  



