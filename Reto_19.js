function sortToys(toys, positions) {
  let arr = [];
  for(let i in toys){
    let obj = {toy:"" , position:""};
    obj.toy = toys[i];
    obj.position = positions[i];
    arr.push(obj);
  }
  let arrS = arr.sort((a,b)=>a.position-b.position);
  return arrS.map(x=>x.toy);
}
