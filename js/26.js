function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки

 
    for (let value of order) {
        total += value;
    };

  // Пиши код выше этой строки
  return total;
}