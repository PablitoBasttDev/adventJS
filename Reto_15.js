function decorateTree(base) {
  let result = [base];
  let aux = base;
  while(result[0].length>1){
    let decor="";
    for(let i=0; i<aux.length-2; i+=2){
      let par = aux.substring(i,i+3).replace(/\s+/g,"");
      if(par[0]==par[1]){
        decor = decor.concat(par[0]," ");
      }else if(par.includes('BP')||par.includes('PB')){
        decor = decor.concat('R ');
      }else if(par.includes('RP')||par.includes('PR')){
        decor = decor.concat('B ');
      }else if(par.includes('BR')||par.includes('RB')){
        decor = decor.concat('P ');
      }
    }
  decor = decor.substring(0,decor.length-1);
  result.unshift(decor);
  aux = result[0];
  }
  return result;
}
