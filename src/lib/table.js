import { getUsers } from "../utils/storage.js";

const table = document.getElementById("users-rows");
const displayTable = (usersList) => {
  let users;
  if (usersList) {
    users = usersList;
  } else {
    users = getUsers();
    // console.log(users.length);
  }

  if (users != null && users.length > 0) {
    users.forEach((user) => {
      let trElement = document.createElement("tr");
      trElement.classList = "border border-red-500";
      trElement.innerHTML = `
            <td class="col p-3">${user.name}</td>
            <td class="col p-3">${user.email}</td>
            <td class="col p-3">${user.age}</td>
            <td class="col p-3">${user.address}</td>
            <td class="col p-3">${user.gender == 0 ? "Male" : "Female"}</td>
            <td class="col p-3"><a href="#" title="" onClick="editForm('${
              user.email
            }')">Edit</a></td>
        `;

      table.appendChild(trElement);
    });
  } else {
    let trElement = document.createElement("tr");
    trElement.classList = "border border-red-500";
    trElement.innerHTML = `
           
            <p>No User Found</p>
            
        `;
    table.appendChild(trElement);
  }
};

const displayNewUser = (user) => {
  let trElement = document.createElement("tr");
  trElement.classList = "border border-red-500";
  trElement.innerHTML = `
            <td class="col p-3">${user.name}</td>
            <td class="col p-3">${user.email}</td>
            <td class="col p-3">${user.age}</td>
            <td class="col p-3">${user.address}</td>
            <td class="col p-3">${user.gender == 0 ? "Male" : "Female"}</td>
            <td class="col p-3"><a href="#" title="" onClick="editForm('${
              user.email
            }')">Edit</a></td>
        `;

  table.appendChild(trElement);
};

export { displayTable, displayNewUser };
