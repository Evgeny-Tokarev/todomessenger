"use strict";
import { sendNewItem } from "./requests";
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
const popUp = document.querySelector(".pop-up");
const newItemForm = document.querySelector("#new-item-form");
todoList.forEach((itemData) => {
  let todoItem = document.createElement("div");
  let input = document.createElement("input");
  input.hidden = true;
  let timeItem = `${itemData.time.year}:${itemData.time.month}:${itemData.time.date}:${itemData.time.hours}:${itemData.time.minutes}`;
  todoItem.innerHTML = `<h3 class="item-title">${itemData.name}</h3><span class="item-content">${itemData.text}</span><span class="time-content">${timeItem}</span>`;
  form.appendChild(input);

  form.appendChild(todoItem);
});
window.addEventListener("click", clickHandler);
function clickHandler(e) {
  if (!popUp.contains(e.target)) {
    popUp.hidden = true;
  }
  if (e.target === addButton) {
    plus(e);
  }
}
newItemForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let newData = {
    name: this.title.value,
    text: this.content.value,
    time: this.time.value,
  };
  sendNewItem(newData);
});
function plus(e) {
  e.preventDefault();
  popUp.hidden = false;
}
