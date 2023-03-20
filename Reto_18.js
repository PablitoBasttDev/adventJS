function dryNumber(dry, numbers) {
  let arr=[];
  for(let i=1; i<=numbers; i++){
    arr.push(i.toString());
  }
  let arrFil = arr.filter((x)=>x.includes(dry.toString()));
  return arrFil.map(x=>parseInt(x));
}
