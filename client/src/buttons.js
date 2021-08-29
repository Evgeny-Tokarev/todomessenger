const buttons = document.createElement("div");
buttons.classList.add("select-popup");
buttons.innerHTML = `
<button class="circle-button change-button" type="button">Change</button>
<button class="circle-button delete-button" type="button">Delete</button>
`;

export default buttons;
