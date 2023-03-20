function checkStepNumbers(systemNames, stepNumbers) {
  let unicos = [...new Set(systemNames)];
  for(let i in unicos){
    let aux = 0;
    for(let j in systemNames){
      if(unicos[i]==systemNames[j]){
        if(aux>=stepNumbers[j]){
          return false
        } else{
          aux = stepNumbers[j];
        }
      }
    }
  }   
  return true;
}
