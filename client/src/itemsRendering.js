import { getItems } from "./requests";
import list from "./index";
function itemsRendering() {
  getItems().then((data) => {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
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
      list.appendChild(input);

      list.appendChild(todoItem);
    });
  });
}
export default itemsRendering;
