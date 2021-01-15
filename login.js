const users = [
  {
    user: "joxtaxt1@gmail.com",
    password: 1234,
  },
  {
    user: "hankot2@gmail.com",
    password: 1234,
  },
  {
    user: "angela",
    password: 0000,
  },
  {
    user: "MAma",
    password: "hola mundo",
  },
    {
    user: "mama",
    password: "admin",
  },
];

/////Login logic
const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let user = document.getElementById("name");
  let password = document.getElementById("password");

  user = user.value;
  password = password.value;

  const Logged = users.filter(
    (usuario) => usuario.user == user && usuario.password == password
  );

  if (Logged.length > 0) {
    sessionStorage.setItem("token", "JoxtaxIniciado");
    window.location = "course.html";
  } else {
    alert("Usuario o contraseña invalidos. Intenta de nuevo");
  }
});
