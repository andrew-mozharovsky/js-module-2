function includes(array, value) {
  // Пиши код ниже этой строки
   let includ = false;
for (let number of array) {
        if (number === value) {
           includ = true;
        } 
    };
  return includ;  
  // Пиши код выше этой строки
}