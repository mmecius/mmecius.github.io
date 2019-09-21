const itemsList = document.querySelector(".clients");

const items = JSON.parse(localStorage.getItem("items")) || [];

function populateList(clients = [], clientsList) {
  clientsList.innerHTML = clients
    .map((client, i) => {
      return `
        <div class="flex">
        <li>
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

populateList(items, itemsList);