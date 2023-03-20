function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let conjuntoPotencia = giftsCities
  .reduce(
  (a,v) => a.concat(a.map(
    d=> [v].concat(d))), [[]]);
  return conjuntoPotencia.filter(a=>
    a.length<=maxCities)
    .map(b=>b.reduce((d,v)=> d+v,0))
    .filter(a=>a<=maxGifts)
    .reduce((a,b)=>Math.max(a,b),0);
}
