function getEvenNumbers(start, end) {
    // Пиши код ниже этой строки
    let newArrey = [];
    for (let i = start; i <= end; i += 1){
        if (i % 2 !== 0) {
            continue;
        }
        newArrey.push(i);
    };

    return newArrey;
    // Пиши код выше этой строки
  }