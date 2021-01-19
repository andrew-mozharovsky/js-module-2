function findLongestWord(string) {
  // Пиши код ниже этой строки
    string = string.split(' ');   
    let longestWord = string[0];    
    for (let i = 0; i < string.length; i += 1){
        if (string[i].length > longestWord.length) {
            longestWord = string[i]           
        };      
    };   
    return longestWord;
  // Пиши код выше этой строки
}
console.log(findLongestWord('The quick brown fox  jumped over the lazy dog'));