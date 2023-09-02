// MENSAJE CUANDO SE ABRE LINK A OTRA PAGINA

const externalLinks = document.querySelectorAll(".external-link");

externalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // No abre el link

    const message = "Serás redirigidx a otro sitio";
    const result = window.confirm(message);

    if (result) {
      const href = link.getAttribute("href");
      window.open(href, "_blank"); // Abre el link en una nueva pestaña
    }
  });
});
