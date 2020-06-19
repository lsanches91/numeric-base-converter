function getNumberType() {
  const numberInput = document.querySelector("#numberInput"); //Seleciona os números que vão ser inseridos
  var type = document.forms[0]; //Definimos a variavél com o primerio formulário em nosso documento
  var txt = "";  

  for(i = 0; i < type.length; i++) {
    if (type[i].checked) {
      txt = type[i].value; //A variavél txt fica com o valor do tipo que foi selecionado
      switch(txt) {        //Fazemos um switch para iniciar a conversão
        case "decimal":    //Caso decimal, convertemos a string em número de base decimal que ficará em num
          num = parseInt(numberInput.value, 10);

          if(!num){ //Caso o usuário passe um valor inválido, um alerto vai avisá-lo e o código é interrompido
            alert("Please, input a valid number.")
            break;  
          }

          document.getElementById("decimalOutput").innerHTML = num.toString(10); //Retorna uma string em decimal
          document.getElementById("binaryOutput").innerHTML = num.toString(2);//Retorna uma string em binário
          document.getElementById("octalOutput").innerHTML = num.toString(8);//Retorna uma string em octal
          document.getElementById("hexadecimalOutput").innerHTML = num.toString(16).toUpperCase();//Retorna uma string em hexa
          break;

        case "binary":  //Caso binário, o número binário é convertido em decimal, e repetimos o processos anteriores
          num = parseInt(numberInput.value, 2);

          if(!num){
            alert("Please, input a valid number.")
            break;
          }

          document.getElementById("decimalOutput").innerHTML = num.toString(10);
          document.getElementById("binaryOutput").innerHTML = num.toString(2);
          document.getElementById("octalOutput").innerHTML = num.toString(8);
          document.getElementById("hexadecimalOutput").innerHTML = num.toString(16).toUpperCase();
          break;

        case "octal":
          num = parseInt(numberInput.value, 8);

          if(!num){
            alert("Please, input a valid number.")
            break;
          }

          document.getElementById("decimalOutput").innerHTML = num.toString(10);
          document.getElementById("binaryOutput").innerHTML = num.toString(2);
          document.getElementById("octalOutput").innerHTML = num.toString(8);
          document.getElementById("hexadecimalOutput").innerHTML = num.toString(16).toUpperCase();
          break;

        case "hexadecimal":
          num = parseInt(numberInput.value, 16);

          if(!num){
            alert("Please, input a valid number.")
            break;
          }

          document.getElementById("decimalOutput").innerHTML = num.toString(10);
          document.getElementById("binaryOutput").innerHTML = num.toString(2);
          document.getElementById("octalOutput").innerHTML = num.toString(8);
          document.getElementById("hexadecimalOutput").innerHTML = num.toString(16).toUpperCase();
          break;

        default:
      }
    }
  }
  console.log(txt); 
}
