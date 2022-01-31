import "regenerator-runtime/runtime";
require("dotenv").config();

async function changeItem(id) {
  let response = await fetch(process.env.BASE_URL + id, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: dataObj,
  });
  let result = await response.json();
  return result;
}

async function removeItem(id) {
  let response = await fetch(process.env.BASE_URL + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
}

async function sendItem(dataObj, id) {
  dataObj = JSON.stringify(dataObj);
  let response = await fetch(process.env.BASE_URL + id, {
    method: !id ? "POST" : "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: dataObj,
  });
  let result = await response.json();
  return result;
}

async function getItems() {
  let response = await fetch(process.env.BASE_URL, {
    method: "GET",
  });

  let result = await response.json();
  return result;
}
async function getItem(id) {
  let response = await fetch(process.env.BASE_URL + id, {
    method: "GET",
  });
  let result = await response.json();
  return result;
}
export { sendItem, getItems, getItem, removeItem, changeItem };
