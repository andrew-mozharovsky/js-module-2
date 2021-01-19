function makeArray(firstArray, secondArray, maxLength) {
    // Пиши код ниже этой строки
//    let newArray = firstArray.concat(secondArray);
//    newArray = newArray.length > maxLength ? newArray.slice(0, maxLength) : newArray;
    firstArray = firstArray.concat(secondArray);
   firstArray = firstArray.length > maxLength ? firstArray.slice(0, maxLength) : firstArray;


    return firstArray;
    

    
    // Пиши код выше этой строки
    
}
console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));
