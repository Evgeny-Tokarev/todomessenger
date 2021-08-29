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

itemsRendering();
window.addEventListener("click", function (e) {
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
export default list;
