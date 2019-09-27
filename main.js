/**Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com. Получив ответ от сервера вывести имена пользователей на страницу. При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. Для визуальной части можно использовать bootstrap или другие фреймворки. */

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.addEventListener("load", () => {
  let users = JSON.parse(xhr.responseText);
  let table = document.getElementById("users-table");
  let usersListName = ``;
  let popupInfo = document.getElementById('popup');
  for (let i = 0; i < users.length; i++) {
    let userName = `<tr>
      <td>
        <a href="#" class="users-name" data-id="${i}">${users[i].name}</a>
      </td>
    </tr>`;
    usersListName += userName;
  }
  table.insertAdjacentHTML("beforeend", usersListName);

  let listUsersName = document.querySelectorAll(".users-name");

  console.log(listUsersName);
  
  for (let i = 0; i < listUsersName.length; i++) {
    listUsersName[i].addEventListener('click', function(event) {
      event.preventDefault();
      console.log(users[i]);
      popupInfo.innerHTML = `
      <ul>
  <li>
  Name: ${users[i].name}
  </li>
  <li>
  Username: ${users[i].username}
  </li>
  <li>
  Email: ${users[i].email}
  </li>
  <li>
  Address: 
  <ul>
  <li>
  street: ${users[i].address.street}
  </li>
  <li>
  suite: ${users[i].address.suite}
  </li>
  <li>
  city: ${users[i].address.city}
  </li>
  <li>
  zipcode: ${users[i].address.zipcode}
  </li>
  <li>
  geo:
  <ul>
  <li>
  lat: ${users[i].address.geo.lat}
  </li>
  <li>
  lng: ${users[i].address.geo.lng}
  </li>
</ul>
  </li>
</ul>
  </li>
</ul>`;
    });
  }
});

xhr.send();
