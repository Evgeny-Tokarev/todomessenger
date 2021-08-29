"use strict";
import { sendNewItem, getItems, removeItem, changeItem } from "./requests";
import buttons from "./buttons";
import itemsRendering from "./itemsRendering";
console.log(buttons);
const list = document.querySelector(".list");
const addButton = document.querySelector(".add-button");
const popUp = document.querySelector(".pop-up");
const newItemForm = document.querySelector("#new-item-form");
const titleInput = document.querySelector("#new-item-name");
<<<<<<< HEAD

itemsRendering();
window.addEventListener("click", function (e) {
=======
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
>>>>>>> f06a34646e9dbed455328ab992df658c4818ab6f
  console.log(e.target);

  if (!popUp.contains(e.target)) {
    popUp.hidden = true;
  }
  if (e.target === addButton) {
    e.preventDefault();
    popUp.hidden = false;
    titleInput.focus();
  }

  if (list.contains(e.target)) {
    if (buttons.contains(e.target)) {
      changeTypeSelect(e.target);
    }

    buttonsAdd(e.target);
  } else {
    if (buttons.dataset) {
      buttonsRemove();
    }
  }
});
<<<<<<< HEAD
=======

>>>>>>> f06a34646e9dbed455328ab992df658c4818ab6f
newItemForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let date = new Date(this.time.value);
  let newData = {
    title: this.title.value,
    create_at: new Date(),
    reminder_time: date,
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

<<<<<<< HEAD
function buttonsAdd(target) {
  let item = target.closest(".todo-item");
  item.appendChild(buttons);
  buttons.dataset.id = item.dataset.id;
}
function buttonsRemove() {
  let id = buttons.dataset.id;
  let item = document.querySelector(`.todo-item[data-id='${id}']`);
  item.removeChild(buttons);
=======
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
>>>>>>> f06a34646e9dbed455328ab992df658c4818ab6f
}

function changeTypeSelect(target) {
  let id = target.closest(".todo-item").dataset.id;
  console.log(target);
  if (target.classList.contains("delete-button")) {
    removeItem(id).then((data) => {
      console.log(data);
      itemsRendering();
    });
  } else {
    changeItem(id);
  }
}
<<<<<<< HEAD
export default list;
=======

itemsRendering();
>>>>>>> f06a34646e9dbed455328ab992df658c4818ab6f
