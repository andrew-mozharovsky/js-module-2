function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки
 
  if (password === ADMIN_PASSWORD) {
  return 'Добро пожаловать!';
  }

  return 'Доступ запрещен, неверный пароль!';
  // Пиши код выше этой строки
}
