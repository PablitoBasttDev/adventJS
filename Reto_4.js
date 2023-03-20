function fitsInOneBox(boxes) {
  return boxes
  .sort((a,b) => a.l-b.l)
  .every(({l,w,h},index,arr)=>
    index===arr.length - 1
    ? true
    : l<arr[index+1].l && w<arr[index+1].w && h<arr[index+1].h
  )
}
