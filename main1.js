/**Создать форму добавления пользователя состоящая из полей name, email, username, phone, website при сабмите формы сделать POST запрос на сервер после ответа от сервера добавлять полученного пользователя на страницу. */

let form = document.getElementById("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const xhr2 = new XMLHttpRequest();
  xhr2.open("POST", "https://jsonplaceholder.typicode.com/posts");

  xhr2.addEventListener("load", () => {
    console.log(JSON.parse(xhr2.responseText));
    let user = JSON.parse(xhr2.responseText);
    console.log(user);
    let infoUser = `
    <p>About User ${user.name}</p>
    <p>${user.name}</p>
    <p>${user.email}</p>
    <p>${user.username}</p>
    <p>${user.phone}</p>
    <p>${user.website}</p>
    `;

    document.body.insertAdjacentHTML('beforeend', infoUser);
  });

  xhr2.setRequestHeader("Content-Type", "application/json");

  xhr2.send(
    JSON.stringify({
      name: this.name.value,
      email: this.email.value,
      username: this.username.value,
      phone: this.phone.value,
      website: this.website.value
    })
  );
});
