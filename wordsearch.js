const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const vletters = [];
  for (let i = 0; i < letters.length; i++) {
    vletters.push([]);
  }
      
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[i].length; j++) {
      vletters[j][i] = letters[i][j];
    }
  }
  const verticallyJoin = vletters.map(ls => ls.join(''));
  //console.log(verticallyJoin);
  //console.log(horizontalJoin);
      
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (let l of verticallyJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};
  
module.exports = wordSearch;