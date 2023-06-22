const fs = require("node:fs/promises");
const path = require('node:path');

/* const contactsPath = fs.readFile('./db/contacts.json')
  .then(data => console.log(data.toString()))
  .catch(err => console.log(err.message)); */

const contactsPath = path.join(__dirname, "contacts.json")

async function readFile() {
  const data = await fs.readFile(contactsPath, "utf-8")

  return data;
}

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код. Повертає масив контактів.
  return contactsPath;
}

/* listContacts() */

function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
/*   const contacts = contactsPath;
  for (const contact of contacts) {
    if (contact.id === contactId) {
      return console.log(contact);
    } else return null;

} */
}

getContactById();

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.

}

module.export = { readFile };