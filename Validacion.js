window.onload = function () {
  const token = sessionStorage.getItem("token");
  const permisos = token === "JoxtaxIniciado";
  if (!permisos) {
    window.location = "404.html";
  }
};
