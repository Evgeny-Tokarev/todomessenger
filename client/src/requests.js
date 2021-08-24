import "regenerator-runtime/runtime";
async function sendNewItem(dataObj) {
  dataObj = JSON.stringify(dataObj);
  console.log(dataObj);
  let response = await fetch("http://localhost:3000/todos", {
    method: "POST",
    contentType: "application/json",
    body: dataObj,
  });

  let result = await response.json();

  alert(result.message);
}
export { sendNewItem };
