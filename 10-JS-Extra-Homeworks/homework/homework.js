// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
    var namePropiedad = Object.keys(objeto)
    var arrayObjeto = []
    for (var i=0; i<namePropiedad.length; i++) {
      arrayObjeto.push([namePropiedad[i], objeto[namePropiedad[i]]])
    }
    return arrayObjeto;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objetoContador = {}
  for (var i=0; i<string.length; i++) {
    if (!objetoContador[string[i]]) {
      objetoContador[string[i]] = 1
    } else { 
    objetoContador[string[i]] = objetoContador[string[i]] + 1;
    }
  }
  return objetoContador;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var resultadoPrevio = "";
  var resultado = "";
  for (var i=0; i<s.length; i++){
    if (s[i].toUpperCase() === s[i]) {
      resultadoPrevio = s[i] + resultadoPrevio;
    } else {
      resultadoPrevio = resultadoPrevio + s[i];
    }
  } 

    for (var i=0; i<resultadoPrevio.length; i++){
      if (resultadoPrevio[i].toUpperCase() === resultadoPrevio[i]) { 
        resultado = resultadoPrevio[i] + resultado;
      } else {
        resultado = resultado + resultadoPrevio[i];
      }
    }
  
  return resultado;
}


// otra manera sería
// var minuscula = "";
// var mayuscula = "";
// for ( var i=0; i<s.lengh; i++) { 
// if (s[i].toUpperCase() === s[i]) {
// mayuscula = mayuscula + s[i];
// } else { 
// minuscula = minuscula + s[i];
// }
// }
// return mayuscula + minuscula;
// }

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
    var strReverse = str.split("").reverse().join("");
    var strArray = strReverse.split(" ");
    var arrayInver = strArray.reverse();
    return arrayInver.join(" ");
  } 

  // otra manera sería:
  // var arrStr = str.split(" ");
  // var strMirror = "";
  // for (var i=0; i<arrStr.length; i++) { 
  // if (i === arrStr.length - 1) { 
  // var temp = arrStr[i].split("").reverse().join(" ")
  // strMirror = strMirror + temp;
  // } else { 
  // var temp = arrStr[i].split("").reverse().join(" ")
  // strMirror = strMirror + temp + " ";
  // }
  // }
  // return strMirror;
  // }


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var aReverse = numero.toString().split('').reverse().join('');
    var numberReverse = Number(aReverse);
    if (numero === numberReverse) {
        return "Es capicua";
    } else {
        return "No es capicua";
    }
  }

  // Otra manera de hacer es:
  // numero = numero.toString();
  // if (asMirror(numero) === numero) { 
  // return "Es capicua";
  // } else {
  // return "No es capicua";
  // }
  //}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaCadena = "";
  for (var i=0; i<cadena.length; i++) {
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") {
      nuevaCadena = nuevaCadena + cadena[i];
    }
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var arrOrd = arr.slice(0, 1);
  var arrOrdIz 
  var arrOrdDer 
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < arrOrd.length; j++) {
      if (arrOrd[j].length > arr[i].length) {
        arrOrdIz = arrOrd.slice(0, j);
        arrOrdDer = arrOrd.slice(j);

        arrOrd = arrOrdIz.concat(arr[i]).concat(arrOrdDer);
        break;
      }
      if (j === arrOrd.length - 1) {
        arrOrd.push(arr[i]);
        break;
      }
    }
  }
  return arrOrd;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arrayInter = [];
  for (var i=0; i<arreglo1.length; i++) {
    for (var j=0; j<arreglo2.length; j++){
      if (arreglo2[j] === arreglo1[i]) {
        arrayInter.push(arreglo2[j])
        break;
      }
    }
  }
  return arrayInter;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

