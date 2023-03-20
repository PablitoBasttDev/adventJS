function checkJump(heights) {
  let iMax = heights.indexOf(Math.max(...heights));
  let sube = heights.slice(0, iMax+1);
  let baja = heights.slice(iMax);
  let subeS = sube.join("")==[...sube].sort((a,b)=>a-b).join("");
  let bajaS = baja.join("")==[...baja].sort((a,b)=>b-a).join("");
  return (subeS && bajaS && sube.length>1 && baja.length>1);
}
