const buttons = document.getElementsByTagName("button");
let number = '';
const text = document.querySelector('.number-box');
const buttonPressed = clickedButton => {
  let buttonValue = clickedButton.target.value;

  if(buttonValue == '='){
    number = eval(number);
    text.innerHTML = number;
  } else {
    number += buttonValue;
    text.innerHTML = operators(number);
  }

  if(buttonValue === 'C'){
    document.querySelector('.number-box').innerHTML = '';
    number = '';
  }
}
for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}

function operators (string) {
  let newString = '';
  for(i = 0; i <= string.length - 1; i++) {
    if(ali[i] === '*'){
      newString += `${string[i] = '&#215;'}`;
    }else if (ali[i] === '/'){
      newString += `${string[i] = '&#247;'}`;
    }else{
      newString += string[i];
    }
  }
  return newString;
}