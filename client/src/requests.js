import "regenerator-runtime/runtime";
<<<<<<< HEAD
async function changeItem(id) {}
async function removeItem(id) {
  console.log("Removing...");
  let response = await fetch("http://localhost:3000/todos/" + id, {
=======
require("dotenv").config();
async function changeItem(id) {
  console.log("Removing...");
  let response = await fetch(process.env.BASE_URL + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });

  let result = await response.json();

  return result;
}
async function removeItem(id) {
  console.log("Removing...");
  let response = await fetch(process.env.BASE_URL + "/" + id, {
>>>>>>> temp-branch
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
  console.log(dataObj);
  console.log("Trying to create...");
<<<<<<< HEAD
  let response = await fetch("http://localhost:8000/api/v1/todo", {
=======
  let response = await fetch(process.env.BASE_URL, {
>>>>>>> temp-branch
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
  let response = await fetch(process.env.BASE_URL, {
>>>>>>> temp-branch
    method: "GET",
    mode: "cors",
    'Access-Control-Allow-Origin':'http://localhost:4200'
  });

  let result = await response.json();
  return result;
}
export { sendNewItem, getItems, removeItem, changeItem };
