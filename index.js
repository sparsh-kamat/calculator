var numbers=document.querySelectorAll('.num'),
    operator = document.querySelectorAll('.operator'),
    result = document.getElementById('='), 
    clear = document.getElementById('ac'),
    backspace = document.getElementById('backspace'),
    input = document.getElementById('input'),
    decimal = document.getElementById('.'),
    decimalclicked=false,
    currentString = input.innerHTML,
    lastChar = currentString[currentString.length - 1];


var num1='',
    num2='',
    currentNumber='',
    currentOperation='',
    currentResult='',
    resultdisplayed=false,
    operatorentered=false;



numbers.forEach((button) => {       //number buttons
  button.addEventListener("click", () => {
    if (!operatorentered){
      currentNumber += button.id;
      console.log(currentNumber);
      input.innerHTML = currentNumber;
      num1=currentNumber;
      operatordisplay.innerHTML = num1+currentOperation+num2;
    }
    else{
      currentNumber += button.id;
      console.log(currentNumber);
      input.innerHTML = currentNumber;
      num2=currentNumber;
      operatordisplay.innerHTML = num1+currentOperation+num2;
    }
    
  });
});
operator.forEach((button) => {   //operator buttons
  button.addEventListener("click", () => {
    if(resultdisplayed){
      currentNumber='';
      currentOperation=button.id;
      operatorentered=true;
      resultdisplayed=false;
      decimalclicked=false;
      input.innerHTML=currentOperation;
      currentNumber='';
      operatordisplay.innerHTML = num1+currentOperation+num2;
    }
    else{
      currentOperation=button.id;
      operatorentered=true;
      decimalclicked=false;
      input.innerHTML=currentOperation;
      currentNumber='';
      operatordisplay.innerHTML = num1+currentOperation+num2;
    }
  });
});


result.addEventListener('click', getresult);
clear.addEventListener('click', clearAll);  //clear button

function getresult(){
  currentResult = operate(currentOperation, num1, num2);
  input.innerHTML = currentResult;
  operatordisplay.innerHTML = num1+currentOperation+num2;
  resultdisplayed=true;
  decimalclicked=false;
  operatorentered=false;
  currentNumber='';
  num1=currentResult;
  num2='';
}
function clearAll(){
  input.innerHTML='';
  currentNumber='';
  currentOperation='';
  currentResult='';
  resultdisplayed=false;
  operatorentered=false;
  decimalclicked=false;
  currentString='';
  num1='';
  num2='';
  operatordisplay.innerHTML='';
}
function add(a, b){
  return parseFloat(a) + parseFloat(b);
}
function subtract(a, b){
  return parseFloat(a) - parseFloat(b);
}
function multiply(a, b){
  return parseFloat(a) * parseFloat(b);
}
function divide(a, b){
  if (parseFloat(b) == 0){
      return "can't quite answer this one cheif";
  }
  else{
      return parseFloat(a) / parseFloat(b);
  }
}
function operate(operator, num1, num2){
  switch(operator){
      case '+':
          return add(num1, num2);
          break;
      case '-':
          return subtract(num1, num2);
          break;
      case '*':
          return multiply(num1, num2);
          break;
      case '/':
          return divide(num1, num2);
          break;
  }
}


decimal.addEventListener('click', function () {
    if (!decimalclicked) {
      currentNumber += '.';
      decimalclicked = true;
      input.innerHTML = currentNumber;
      operatordisplay.innerHTML = num1 + currentOperation + num2;
    }
  } );

  backspace.addEventListener('click', () => {
    if(currentNumber.length>0){
      currentNumber=currentNumber.slice(0,-1);
      input.innerHTML=currentNumber;
      operatordisplay.innerHTML = num1+currentOperation+num2;
    }
    else{
      currentNumber='';
      input.innerHTML=currentNumber;
      operatordisplay.innerHTML = num1+currentOperation+num2;
    }
  }
  );v