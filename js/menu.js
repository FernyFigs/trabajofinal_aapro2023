// MENU DESPLEGABLE

document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector("ul").classList.toggle("active");
});

//se hizo ("menu-toggle") para que cambie la presencia de la clase "active" en el primer elemento "ul" del documento y así el menú se puede mostrar u ocultar.
