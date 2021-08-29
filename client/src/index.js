"use strict";
import { sendNewItem, removeItem, changeItem } from "./requests";
import buttons from "./buttons";
import itemsRendering from "./itemsRendering";

const list = document.querySelector(".list");
const addButton = document.querySelector(".add-button");
const popUp = document.querySelector(".pop-up");
const newItemForm = document.querySelector("#new-item-form");
const textInput = document.querySelector("#new-item-content");

itemsRendering();
window.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(buttons.dataset.id);
  if (!popUp.contains(e.target)) {
    popUp.hidden = true;
  }
  if (e.target === addButton) {
    e.preventDefault();
    popUp.hidden = false;
    textInput.focus();
  }

  if (list.contains(e.target)) {
    if (buttons.contains(e.target)) {
      changeTypeSelect(e.target);
    }

    buttonsAdd(e.target);
  } else {
    if (buttons.dataset.id && list.contains.buttons) {
      buttonsRemove();
    }
  }
});
newItemForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let date = new Date(this.time.value);
  let newData = {
    text: this.content.value,
    reminder_time: date,
  };

  if (newData.text && newData.reminder_time && date > new Date()) {
    sendNewItem(newData).then(function (data) {
      newItemForm.reset();
      popUp.hidden = true;
      itemsRendering();
    });
  } else {
    alert("Incomplete/incorrect data");
  }
});

function buttonsAdd(target) {
  let item = target.closest(".todo-item");
  item.appendChild(buttons);
  buttons.dataset.id = item.dataset.id;
}
function buttonsRemove() {
  let id = buttons.dataset.id;
  let item = document.querySelector(`.todo-item[data-id='${id}']`);
  item.removeChild(buttons);
}

function changeTypeSelect(target) {
  let id = target.closest(".todo-item").dataset.id;
  if (target.classList.contains("delete-button")) {
    removeItem(id).then(() => {
      itemsRendering();
    });
  } else {
    changeItem(id);
  }
}
export default list;
