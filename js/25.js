function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
    let newArray = [];
    for (let value of array1) {
        if (array2.includes(value)) {
            newArray.push(value);
        };
    };
    return newArray;

  
  // Пиши код выше этой строки
}