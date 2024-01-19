const { program } = require("commander");
const {
  listContacts,
  addContact,
  getContactById,
  removeContact,
} = require("./contacts.js");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const all = await listContacts();
      console.log(all);
      break;

    case "get":
      const byId = await getContactById(id);
      console.log(byId);
      break;

    case "add":
      const newCon = await addContact(name, email, phone);
      console.log(newCon);
      break;

    case "remove":
      const removed = await removeContact(id);
      console.log(removed);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
