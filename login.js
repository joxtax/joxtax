const users = [
  {
    user: "hankot",
    password: "jxtMoreno01",
  },
  {
    user: "joxtax",
    password: "padre",
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
