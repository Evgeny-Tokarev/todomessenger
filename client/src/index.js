"use strict";
import { sendNewItem, getItems, itemRemove } from "./requests";
import PopUpHtml from "./PopUpHtml";
import popUpHtml from "./PopUpHtml";

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
      todoItem.classList.add("todo-item");
      todoItem.dataset.id = itemData.id;
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
  console.log(e.target);

  if (!popUp.contains(e.target)) {
    popUp.hidden = true;
  }
  if (e.target === addButton) {
    plus(e);
  }
  if (document.querySelector(".select-popup")) {
    if (!e.target.matches(".select-popup > .circle-button")) {
      changePopUpHandle(e.target, document.querySelector(".select-popup"));
    }
  }

  if (form.contains(e.target)) {
    changePopUpHandle(e.target);
    if (document.querySelector(".select-popup").contains(e.target)) {
      changeTypeSelect(e.target, false);
    }
  }
}
newItemForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let date = new Date(this.time.value);
  let newData = {
    name: this.title.value,
    text: this.content.value,
    time: {
      year: date.getFullYear(),
      month: date.getMonth(),
      date: date.getDate(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
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
function changePopUpHandle(target, popUp) {
  let itemToChange = target.closest(".todo-item");
  let selectionPopUp = document.createElement("div");
  if (popUp) {
    let parent = popUp.closest(".todo-item");
    parent.removeChild(parent.childNodes[3]);
  } else {
    if (!document.querySelector(".select-popup")) {
      selectionPopUp.classList.add("select-popup");
      selectionPopUp.innerHTML = popUpHtml;
      itemToChange.appendChild(selectionPopUp);
    }
  }
}
function changeTypeSelect(target) {
  console.log(target.closest("div.todo-item").dataset.id);
}
