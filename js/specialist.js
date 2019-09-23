const dummyItemsList = document.querySelector(".dummyClients");

var request = new XMLHttpRequest();
request.open("GET", "https://api.myjson.com/bins/xyvkp", true);
request.onreadystatechange = function () {
  if (request.readyState != 4 || request.status != 200) return;
  var dummyClients = JSON.parse(request.responseText);
  for (i = 0; i < dummyClients.length; i++) {
    dummyItemsList.innerHTML += `
        <div class="flex">
        <li class="clientList">
        <input type="checkbox" data-index=${i} id="item${i}" ${
      dummyClients.done ? "checked" : ""
    } />
          <label for="item${i}">${dummyClients[i].clientName}</label>
        </li>
        <li class="clientList">
          <label for="item${i}">${dummyClients[i].specialistName}</label>
        </li>
        </div>
      `;
  }
};
request.send();

const itemsList = document.querySelector(".clients");

const items = JSON.parse(localStorage.getItem("items")) || [];

function populateList(clients = [], clientsList) {
  clientsList.innerHTML = clients
    .map((client, i) => {
      return `
        <div class="flex">
        <li class="clientList">
          <input type="checkbox" data-index=${i} id="item${i}" ${
        client.done ? "checked" : ""
      } />
          <label for="item${i}">${client.clientName}</label>
        </li>
        <li class="clientList">
          <label for="item${i}">${client.specialistName}</label>
        </li>
        </div>
      `;
    })
    .join("");
}

function removeClient(e) {
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  document.getElementById("button").onclick = function () {
    items.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(items));
  };
}

itemsList.addEventListener("click", removeClient);
populateList(items, itemsList);