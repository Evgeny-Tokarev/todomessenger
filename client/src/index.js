"use strict";

import { sendNewItem, getItems, itemRemove } from "./requests";
import popUpHtml from "./PopUpHtml";

const form = document.querySelector(".list");
const addButton = document.querySelector(".add-button");
const popUp = document.querySelector(".pop-up");
const newItemForm = document.querySelector("#new-item-form");
const titleInput = document.querySelector("#new-item-name");
const timeInput = document.querySelector("#new-item-time");

function itemsRendering() {
  getItems().then((items) => {
    while (form.firstChild) {
      form.removeChild(form.firstChild);
    }
    items.forEach((data) => {
      let todoItem, timeItem, input;

      todoItem = document.createElement("div");
      todoItem.classList.add("todo-item");
      todoItem.dataset.id = data.id;

      input = document.createElement("input");
      input.hidden = true;

      if (data.time) {
        data.time.minutes =
          data.time.minutes < 10 ? "0" + data.time.minutes : data.time.minutes;
        data.time.month =
          data.time.month < 10 ? "0" + data.time.month : data.time.month;
        data.time.date =
          data.time.date < 10 ? "0" + data.time.date : data.time.date;

        timeItem = `${data.time.date} ${data.time.month} ${data.time.year} ${data.time.hours}:${data.time.minutes}`;
      } else if (data.create_at) {
        timeItem = new Date(data.create_at).toLocaleString();
      } else {
        timeItem = "";
      }

      todoItem.innerHTML = `
          <h3 class="item-title">${data.name ?? "Без названия"}</h3>
          <span class="item-content">${data.text}</span>
          <span class="time-content">${timeItem}</span>
      `;

      form.appendChild(input);
      form.appendChild(todoItem);
    });
  });
}

window.addEventListener("click", function clickHandler(e) {
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
});

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

itemsRendering();
