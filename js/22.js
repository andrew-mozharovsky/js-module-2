function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Пиши код ниже этой строки
    for (let i = min; i <= max; i += 1){
        numbers.push(i)
    }
    

  // Пиши код выше этой строки
  return numbers;
}
console.log(createArrayOfNumbers(14, 17))