// var input = document.getElementById('input');
// var result = document.getElementById('result');
// var inputType = document.getElementById('inputType');
// var resultType = document.getElementById('resultType');
// var inputTypeValue, resultTypeValue;

// input.addEventListener("keyup",myResult);
// inputType.addEventListener("change",myResult);
// resultType.addEventListener("change",myResult);

// //valeur initial prise 
// inputTypeValue = inputType.value;
// resultTypeValue = resultType.value;

// function myResult(){
// // lorsque nous modifions la valeur et le type de sortie, nous devons mettre Ã  
// // jour le inputTypeValue et resultTypeValue

// inputTypeValue = inputType.value;
// resultTypeValue = resultType.value;

// // comparaison  du input et du resultInput en ajoutant la formule

//     if(inputTypeValue === "euro" && resultTypeValue ==="dollars"){
//         // de euro a dollars convertion 
//         result.value = Number(input.value) *1.07 ;
//     }
//     else if(inputTypeValue === "euro" && resultTypeValue ==="FS"){
//         // de euro a dollars convertion 
//         result.value = Number(input.value) *0.99 ;
//     }
//     else if(inputTypeValue === "euro" && resultTypeValue ==="euro"){
//         result.value = input.value


//     }

//     else if(inputTypeValue === "dollars" && resultTypeValue ==="euro"){
//         // de euro a dollars convertion 
//         result.value = input.value * 0.94;
//     }
//     else if(inputTypeValue === "dollars" && resultTypeValue ==="FS"){
//         // de euro a dollars convertion 
//         result.value = input.value * 0,93;
//     }
//     else if(inputTypeValue === "dollars" && resultTypeValue ==="dollars"){
//         result.value = input.value


//     }

//     else if(inputTypeValue === "FS" && resultTypeValue ==="euro"){
//         // de euro a dollars convertion 
//         result.value = input.value * 1.01;
//     }
//     else if(inputTypeValue === "FS" && resultTypeValue ==="dollars"){
//         // de euro a dollars convertion 
//         result.value = input.value * 1.08;
//     }
//     else if(inputTypeValue === "FS" && resultTypeValue ==="FS"){
//         result.value = input.value


//     }
// }
document.addEventListener("DOMContentLoaded", function(event) { 
    var input = document.getElementById('input');
    var result = document.getElementById('result');
    var inputType = document.getElementById('inputType');
    var resultType = document.getElementById('resultType');
    var inputTypeValue, resultTypeValue;
  
    input.addEventListener("keyup",myResult);
    inputType.addEventListener("change",myResult);
    resultType.addEventListener("change",myResult);
  
    //valeur initial prise 
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
  
    function myResult(){
      // lorsque nous modifions la valeur et le type de sortie, nous devons mettre Ã  
      // jour le inputTypeValue et resultTypeValue
  
      inputTypeValue = inputType.value;
      resultTypeValue = resultType.value;
  
      // comparaison  du input et du resultInput en ajoutant la formule
  
      if(inputTypeValue === "euro" && resultTypeValue ==="dollars"){
          // de euro a dollars convertion 
          result.value = Number(input.value) *1.07 ;
      }
      else if(inputTypeValue === "euro" && resultTypeValue ==="FS"){
          // de euro a dollars convertion 
          result.value = Number(input.value) *0.99 ;
      }
      else if(inputTypeValue === "euro" && resultTypeValue ==="euro"){
          result.value = input.value
      }
  
      else if(inputTypeValue === "dollars" && resultTypeValue ==="euro"){
          // de euro a dollars convertion 
          result.value = input.value * 0.94;
      }
      else if(inputTypeValue === "dollars" && resultTypeValue ==="FS"){
          // de euro a dollars convertion 
          result.value = input.value * 0,93;
      }
      else if(inputTypeValue === "dollars" && resultTypeValue ==="dollars"){
          result.value = input.value
      }
  
      else if(inputTypeValue === "FS" && resultTypeValue ==="euro"){
          // de euro a dollars convertion 
          result.value = input.value * 1.01;
      }
      else if(inputTypeValue === "FS" && resultTypeValue ==="dollars"){
          // de euro a dollars convertion 
          result.value = input.value * 1.08;
      }
      else if(inputTypeValue === "FS" && resultTypeValue ==="FS"){
          result.value = input.value
      }
    }
  });