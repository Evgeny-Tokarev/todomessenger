import "regenerator-runtime/runtime";
<<<<<<< HEAD
async function changeItem(id) {}
async function removeItem(id) {
  console.log("Removing...");
  let response = await fetch("http://localhost:3000/todos/" + id, {
=======

const baseUrl = "http://localhost:8000/api/v1";

async function itemModification(id) {}

async function itemRemove(id) {
  let response = await fetch(`${baseUrl}/todo/` + id, {
    credentials: "omit",
>>>>>>> f06a34646e9dbed455328ab992df658c4818ab6f
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });

  let result = await response.json();

  return result;
}

async function sendNewItem(dataObj) {
  dataObj = JSON.stringify(dataObj);
<<<<<<< HEAD
  let response = await fetch("http://localhost:8000/api/v1/todo", {
=======
  let response = await fetch(`${baseUrl}/todo/`, {
    credentials: "omit",
>>>>>>> f06a34646e9dbed455328ab992df658c4818ab6f
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: dataObj,
  });

  let result = await response.json();
  console.log(result);
  return result;
}

async function getItems() {
<<<<<<< HEAD
  let response = await fetch("http://localhost:8000/api/v1/todo", {
=======
  let response = await fetch(`${baseUrl}/todo/`, {
    credentials: "omit",
>>>>>>> f06a34646e9dbed455328ab992df658c4818ab6f
    method: "GET",
    mode: "cors",
  });

  let result = await response.json();
  return result;
}
<<<<<<< HEAD
export { sendNewItem, getItems, removeItem, changeItem };
=======

export { sendNewItem, getItems, itemRemove };
>>>>>>> f06a34646e9dbed455328ab992df658c4818ab6f
