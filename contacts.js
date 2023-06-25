const fs = require("node:fs/promises");
const path = require('node:path');
const crypto = require('crypto');

const contactsPath = path.join(__dirname, "contacts.json")

async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
}

async function writeContact(newContact) {
  await fs.writeFile(contactsPath, JSON.stringify(newContact))
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);
  return contact;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const removedContact = contacts.filter((contact) => contact.id !== contactId);
  await writeContact(removedContact);
  return contacts.find((contact) => contact.id === contactId);
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = { id: crypto.randomUUID(), name, email, phone };
  contacts.push(newContact);
  await writeContact(contacts);
  return newContact;
}

module.export = { listContacts, getContactById, removeContact, addContact };