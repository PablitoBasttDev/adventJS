function getGiftsToRefill(a1, a2, a3) {
  return [...new Set(a1.concat(a2,a3))].filter(a=>{
    return a1.includes(a)+a2.includes(a)+a3.includes(a)==1
  })
}
