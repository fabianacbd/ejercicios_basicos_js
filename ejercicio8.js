const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(stringList) 
  // Completar código
  {
    let longestWord = ""; 
 for (const word of stringList) {
  if (word.length > longestWord.length) {longestWord = word;}
 }
  }

 
  console.log(findLongestWord(avengers));
findLongestWord(avengers)
