const itemsList = document.querySelector(".clients");

const items = JSON.parse(localStorage.getItem("items")) || [];

function populateList(clients = [], clientsList) {
    clientsList.innerHTML = clients
        .map((client, i) => {
            return `
        <div class="flex">
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${
        client.done ? "checked" : ""
      } />
          <label for="item${i}">${client.clientName}</label>
        </li>
        <li>
          <label for="item${i}">${client.specialistName}</label>
        </li>
        </div>
      `;
        })
        .join("");
}

function toggleDone(e) {
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
}

function removeClient(e) {
    const el = e.target;
    const index = el.dataset.index;
    document.getElementById("button").onclick = function () {
        items.splice(index, 1);
        localStorage.setItem("items", JSON.stringify(items));
    };
}

itemsList.addEventListener("click", toggleDone);
itemsList.addEventListener("click", removeClient);
populateList(items, itemsList);