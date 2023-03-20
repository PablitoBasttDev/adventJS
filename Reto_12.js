function selectSleigh(distance, sleighs) {
  let nombres = [...sleighs].map(a=>a.name);
  let consumos = [...sleighs].map(a=>a.consumption*distance);
  if(consumos.every(a=>a>20)){
    return null
  } else{
    return nombres[consumos.filter(a=> a<=20 ).length-1]
  }
}
