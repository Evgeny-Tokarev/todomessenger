import "regenerator-runtime/runtime";

const baseUrl = "http://localhost:8000/api/v1";

async function itemModification(id) {}

async function itemRemove(id) {
  let response = await fetch(`${baseUrl}/todo/` + id, {
    credentials: "omit",
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
  let response = await fetch(`${baseUrl}/todo/`, {
    credentials: "omit",
    method: "POST",
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
  let response = await fetch(`${baseUrl}/todo/`, {
    credentials: "omit",
    method: "GET",
  });

  let result = await response.json();
  return result;
}

export { sendNewItem, getItems, itemRemove };
