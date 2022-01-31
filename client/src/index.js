"use strict";
import { getItem, sendItem, removeItem, changeItem } from "./requests";
import buttons from "./buttons";
import { itemsRendering } from "./itemsRendering";

const list = document.querySelector(".list");
const addButton = document.querySelector(".add-button");
const sendButton = document.querySelector(".send-button");
const popUp = document.querySelector(".pop-up");
const newItemForm = document.querySelector("#new-item-form");
const textInput = document.querySelector("#new-item-content");
const timeInput = document.querySelector("#new-item-time");
let isAppend = false;
// заполняем список
itemsRendering();
// вешаем общий обработчик по клику
window.addEventListener("click", function (e) {
  console.log(e.target);
  // убираем попап при клике вне
  if (!popUp.contains(e.target)) {
    popUp.hidden = true;
  }
  // показываем попап с кнопкой "Add" при клике на кнопку "+"
  if (e.target === addButton) {
    e.preventDefault();
    popUp.hidden = false;
    sendButton.innerText = "Add";
    textInput.focus();
  }
  // при  клике на список вызываем ф-ию buttonsAdd
  if (list.contains(e.target)) {
    buttonsAdd(e.target);
    // при клике по кнопкам "change" "delete" вызываем ф-ию  changeTypeSelect
    if (buttons.contains(e.target)) {
      changeTypeSelect(e.target);
      buttonsRemove();
    }
    // при  клике вне списка вызываем ф-ию  buttonsRemove
  } else {
    buttonsRemove();
  }
});
// вешаем обработчик по событию "submit" на всплывающую форму #new-item-form для нового дела в списке или редактирования существующего
newItemForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let date = new Date(this.time.value);
  // готовим объект с данными для отправки на сервер
  let newData = {
    text: this.content.value,
    reminder_time: date,
  };
  // проверяем на наличие всех данных, а также на будущность времени напоминания
  if (newData.text && newData.reminder_time && date > new Date()) {
    // заполняем id для метода put или оставляем пустым для post
    let id = this.dataset.id ? this.dataset.id + "/" : "";
    // вызываем функцию sendItem, очищаем форму, прячем её, и перерисовываем список
    sendItem(newData, id).then(() => {
      newItemForm.reset();
      popUp.hidden = true;
      itemsRendering();
    });
    // выводим ошибку данных при непрохождении проверки данных
  } else {
    alert("Incomplete/incorrect data");
  }
});

function buttonsAdd(target) {
  let item = target.closest(".todo-item");
  item.appendChild(buttons);
  buttons.dataset.id = item.dataset.id;
  isAppend = true;
}
function buttonsRemove() {
  if (isAppend) {
    let id = buttons.dataset.id;
    let item = document.querySelector(`.todo-item[data-id='${id}']`);
    item.removeChild(buttons);
    isAppend = false;
  }
}

function changeTypeSelect(target) {
  let id = target.closest(".todo-item").dataset.id;
  if (target.classList.contains("delete-button")) {
    removeItem(id).then(() => {
      itemsRendering();
    });
  } else {
    sendButton.innerText = "Change";
    popUp.hidden = false;

    getItem(id).then((data) => {
      let date = new Date(data.reminder_time);
      textInput.value = data.text;
      timeInput.valueAsNumber = date.getTime();
      newItemForm.dataset.id = data.id;
    });
  }
}
export { list, sendButton };
