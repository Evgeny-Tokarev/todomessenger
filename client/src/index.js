"use strict";
import { sendNewItem, getItems } from "./requests";

const form = document.querySelector(".list");
const addButton = document.querySelector(".add-button");
const popUp = document.querySelector(".pop-up");
const newItemForm = document.querySelector("#new-item-form");
const titleInput = document.querySelector("#new-item-name");
const timeInput = document.querySelector("#new-item-time");
function itemsRendering() {
  getItems().then((data) => {
    while (form.firstChild) {
      form.removeChild(form.firstChild);
    }
    data.forEach((itemData) => {
      let todoItem = document.createElement("div");
      let input = document.createElement("input");
      input.hidden = true;
      itemData.time.minutes =
        itemData.time.minutes < 10
          ? "0" + itemData.time.minutes
          : itemData.time.minutes;
      itemData.time.month =
        itemData.time.month < 10
          ? "0" + itemData.time.month
          : itemData.time.month;
      itemData.time.date =
        itemData.time.date < 10 ? "0" + itemData.time.date : itemData.time.date;
      let timeItem = `${itemData.time.date} ${itemData.time.month} ${itemData.time.year} ${itemData.time.hours}:${itemData.time.minutes}`;
      todoItem.innerHTML = `<h3 class="item-title">${itemData.name}</h3><span class="item-content">${itemData.text}</span><span class="time-content">${timeItem}</span>`;
      form.appendChild(input);

      form.appendChild(todoItem);
    });
  });
}
itemsRendering();
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
  let date = new Date(this.time.value);
  let newData = {
    name: this.title.value,
    text: this.content.value,
    time: {
      year: parseInt(date.getFullYear()),
      month: parseInt(date.getMonth()),
      date: parseInt(date.getDate()),
      hours: parseInt(date.getHours()),
      minutes: parseInt(date.getMinutes()),
    },
  };

  if (newData.name && newData.text && newData.time && date > new Date()) {
    sendNewItem(newData).then(function (data) {
      newItemForm.reset();
      popUp.hidden = true;
      itemsRendering();
    });
  } else {
    alert("Incomplete/incorrect data");
  }
});
function plus(e) {
  e.preventDefault();
  popUp.hidden = false;
  titleInput.focus();
}
