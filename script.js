// First method

function validatePIN(pin) {
    if (pin.length !== 4 && pin.length !== 6) {
        return false;
    }
  
  for (let i = 0; i < pin.length; i++){
    if(pin[i] < '0' || pin[i] > '9'){
      return false;
    }
  }
  return true;
}
console.log(validatePIN("123!"));

// second method

function valid(p)
{
    return /^(\d{4}|\d{6})$/.test(p);
}
console.log(valid("1333"));