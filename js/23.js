function filterArray(numbers, value) {
  // Пиши код ниже этой строки
    let newArrey = [];
    for (let number of numbers) {
        if (number > value) {
            newArrey.push(number);
        };
    };
    return newArrey;

  // Пиши код выше этой строки
}
console.log(filterArray([1, 2, 3, 4, 5], 3));