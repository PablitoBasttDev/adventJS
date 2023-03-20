function createCube(size) {
  let str1 = '';
  let str2 = '';

  for(let i=1; i<=size; i++){
    str1 = str1.concat(' '.repeat(size-i),'/\\'.repeat(i),"_\\".repeat(size),'\n');
    str2 = str2.concat(' '.repeat(i-1),'\\/'.repeat(size-i+1),'_/'.repeat(size),'\n');
  }

  return str1.concat(str2.slice(0,-1));
}
