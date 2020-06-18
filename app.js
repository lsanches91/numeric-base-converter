function getNumberType() {
  const numberInput = document.querySelector("#numberInput");
  var type = document.forms[0];
  var txt = "";  

  for(i = 0; i < type.length; i++) {
    if (type[i].checked) {
      txt = type[i].value;
      switch(txt) {
        case "decimal":
          num = parseInt(numberInput.value, 10);

          if(!num){
            alert("Please, input a valid number.")
            break;
          }

          document.getElementById("decimalOutput").innerHTML = num;
          document.getElementById("binaryOutput").innerHTML = num.toString(2);
          document.getElementById("octalOutput").innerHTML = num.toString(8);
          document.getElementById("hexadecimalOutput").innerHTML = num.toString(16).toUpperCase();
          break;

        case "binary":
          num = parseInt(numberInput.value, 2);

          if(!num){
            alert("Please, input a valid number.")
            break;
          }

          document.getElementById("decimalOutput").innerHTML = num;
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

          document.getElementById("decimalOutput").innerHTML = num;
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

          document.getElementById("decimalOutput").innerHTML = num;
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
