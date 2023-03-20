function getFilesToBackup(lastBackup, changes) {
  let changesFilter = changes.filter(a=>a[1]>lastBackup).map(a=>a[0]);
  let changesSort = changesFilter.sort((a,b)=>a-b);
  if(changesSort.length==0){
    return [];
  }else{
    return changesSort.filter((a,i)=>changesSort.indexOf(a)==i)
  }
}
