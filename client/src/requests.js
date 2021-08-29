import "regenerator-runtime/runtime";
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
  let response = await fetch(process.env.BASE_URL, {
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
  let response = await fetch(process.env.BASE_URL, {
    method: "GET",
  });

  let result = await response.json();
  return result;
}
export { sendNewItem, getItems, removeItem, changeItem };
