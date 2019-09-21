const addItems = document.querySelector(".add-items");

const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
    e.preventDefault();
    const clientName = this.querySelector("[name=client]").value;
    const specialistName = this.querySelector("[name=specialist]").value;

    const item = {
        clientName,
        specialistName,
        done: false
    };

    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
    this.reset();
}

function submitClient() {
    addItems.addEventListener("submit", addItem);
}