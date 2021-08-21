"use strict";
const todoList = [
  {
    id: 1,
    name: "name1",
    text: "text1",
    time: { year: 2021, month: 8, date: 30, hours: 12, minutes: 0 },
  },
  {
    id: 1,
    name: "name2",
    text: "text2",
    time: { year: 2021, month: 8, date: 31, hours: 12, minutes: 0 },
  },
];
const form = document.querySelector(".list");
const addButton = document.querySelector(".add-button");
todoList.forEach((itemData) => {
  let todoItem = document.createElement("div");
  let input = document.createElement("input");
  input.hidden = true;
  todoItem.innerHTML = `<h3 class="item-title">${itemData.name}</h3><span class="item-content">${itemData.text}</span>`;
  form.appendChild(input);

  form.appendChild(todoItem);
});
addButton.addEventListener("click", plus);
function plus(e) {
  e.preventDefault();
  console.log("Data request");
}
