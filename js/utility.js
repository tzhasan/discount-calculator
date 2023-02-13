function getNumFromValue(elementID){
  const element=document.getElementById(elementID).value
  const elementValueAsNumber=parseFloat(element)
  // document.getElementById(elementID).value= "0"
  return elementValueAsNumber
}

function getNumFromString(elementID){
  const element=document.getElementById(elementID).innerText
  const elementValueAsNumber=parseFloat(element)
  document.getElementById(elementID).innerText= ""
  return elementValueAsNumber
}