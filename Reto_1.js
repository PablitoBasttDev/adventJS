function wrapping(gifts) {
  let arr=[];
    gifts.forEach(item=>{
      arr.push('*'.repeat(item.length+2)+'\n*'+item+'*\n'+'*'.repeat(item.length+2))
    });
  return arr;
}
