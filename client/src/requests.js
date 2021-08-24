import "regenerator-runtime/runtime";
async function sendNewItem(dataObj) {
  dataObj = JSON.stringify(dataObj);
  console.log(dataObj);
  let response = await fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: dataObj,
  });

  let result = await response.json();

  console.log(result);
}
export { sendNewItem };
