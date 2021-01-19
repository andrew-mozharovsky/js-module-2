function findNumber(start, end, divisor) {
  // Пиши код ниже этой строки
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
     return i;
      
    }
  }

  return number;
  // Пиши код выше этой строки
}