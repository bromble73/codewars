function duplicateCount(text){
  let map = new Map();
  for (let i = 0; i < text.length; i++) {
    let character = text[i].toLowerCase();
    map.set(character, map.has(character) ? true : false);
  }
  return [...map].filter(e => e[1]).length;
}
