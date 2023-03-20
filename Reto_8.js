function checkPart(part) {
  const palindromo = str => str === str.split("").reverse().join("");
  let str2 = [...part]
  .map(a=>part.replace(a,""))
  .some(a=>palindromo(a));
  return (palindromo(part)||str2);
}
