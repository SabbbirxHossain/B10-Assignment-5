function getValueFromInputFieldById(id){
  const inputValue = document.getElementById(id).value ;
  const inputValueNumber = parseFloat(inputValue);
  return inputValueNumber;
}

function getValueById(id){
  const inputValue = document.getElementById(id).innerText ;
  const inputValueNumber = parseFloat(inputValue);
  return inputValueNumber;
}