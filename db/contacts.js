const fs = require("fs/promises");

/* fs.readFile("./contacts.json")
  .then(data => console.log(data))
  .catch(error => console.log(error.message)) */

const readFile = async () => {
  /* const buffer = await fs.readFile("./contacts.json");
  const text = buffer.toString();
  console.log(text); */

  /* const text = await fs.readFile("./contacts.json", "utf-8");
  console.log(text); */
}
  
readFile();

// Розкоментуй і запиши значення

/* const contactsPath = require("./contacts.json");

console.log(contactsPath) */


// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код. Повертає масив контактів.
}

function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту. 
}