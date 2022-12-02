function countHours(year, holidays) {
  let count = 0;
  holidays.forEach(a=>{
    a = new Date(year.toString()+'/'+a);
    if(a.getDay()!==0 && a.getDay()!==6){
      count++;
    };
  })
  return count*2
}
