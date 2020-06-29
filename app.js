function getNumberType() {
  const numberInput = document.querySelector("#numberInput"); //Seleciona os números que vão ser inseridos
  var type = document.forms[0]; //Definimos a variavél com o primerio formulário em nosso documento
  var txt = "";  

  for(i = 0; i < type.length; i++) {
    if (type[i].checked) {
      txt = type[i].value; //A variavél txt fica com o valor do tipo que foi selecionado
      switch(txt) {        //Fazemos um switch para iniciar a conversão
        case "decimal":    //Caso decimal
          num = parseInt(numberInput.value, 10);//Convertemos o valor para decimal
          /**
           * Mesmo já sendo decimal, o número que passamos vem como uma string
           * então usamos o parseInt para se tornar uma variável numérica e
           * assim podemos converter a base numérica com toString
           */
          if(!num){ //Caso o valor não possa ser convertido, um alerta vai avisá-lo
            alert("Please, input a valid number.")
            break;  
          }

          numToString(num);
          break;

        case "binary"://Caso binário
          num = parseInt(numberInput.value, 2);//Convertemos em decimal

          if(!num){
            alert("Please, input a valid number.")
            break;
          }

          numToString(num);
          break;

        case "octal"://Caso octal
          num = parseInt(numberInput.value, 8);//Convertemos em decimal

          if(!num){
            alert("Please, input a valid number.")
            break;
          }

          numToString(num);
          break;

        case "hexadecimal"://Caso hexadecimal
          num = parseInt(numberInput.value, 16);//Convertemos em decimal

          if(!num){
            alert("Please, input a valid number.")
            break;
          }

          numToString(num);
          break;

        default:
      }
    }
  }  
}

function numToString(num) {
  document.getElementById("decimalOutput").innerHTML = num.toString(10); //Retorna uma string em decimal
  document.getElementById("binaryOutput").innerHTML = num.toString(2);//Retorna uma string em binário
  document.getElementById("octalOutput").innerHTML = num.toString(8);//Retorna uma string em octal
  document.getElementById("hexadecimalOutput").innerHTML = num.toString(16).toUpperCase();//Retorna uma string em hexa
}
