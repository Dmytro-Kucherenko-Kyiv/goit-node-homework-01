# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"

result: https://monosnap.com/file/DryucBrLkvdXlsTr1ZlsayjmJu3fQM

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

result: https://monosnap.com/file/atP5nB2yniUZEDbwPVqGTn7021Pidi

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

result: https://monosnap.com/file/UufB1AECJiF5AUfMbUdzorEtvSSS0x

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

result: https://monosnap.com/file/DsvKIY4AxhWqwVaBb674tD2iNH6Q6e
