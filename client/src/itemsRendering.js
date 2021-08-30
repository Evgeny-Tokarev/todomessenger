import { getItems } from "./requests";
import {list} from "./index";
function itemsRendering() {
  getItems().then((data) => {
    console.log(data);
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
    data.forEach((itemData) => {
      let options = {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hours: "2-digit",
        minute: "numeric",
        second: "numeric",
      };
      let time = new Date(itemData.reminder_time).toLocaleString(
        undefined,
        options
      );
      console.log(time);
      let todoItem = document.createElement("div");
      todoItem.classList.add("todo-item");
      todoItem.dataset.id = itemData.id;
      let input = document.createElement("input");
      input.hidden = true;
      todoItem.innerHTML = `</h3><span class="item-content">${itemData.text}</span><span class="time-content">${time}</span>`;
      list.appendChild(input);

      list.appendChild(todoItem);
    });
  });
}
export default itemsRendering;
