const btnMenu = document.querySelector(".btn-menu");
const menuList = document.getElementById("menuList");

// Exibe ou oculta o menu ao clicar no botão
btnMenu.addEventListener("click", (event) => {
  event.stopPropagation(); // Impede que o clique propague para o documento
  menuList.classList.toggle("menu-list-visible");
  menuList.classList.toggle("menu-list-hidden");
});

// Oculta o menu ao clicar fora dele
document.addEventListener("click", (event) => {
  if (!menuList.contains(event.target) && !btnMenu.contains(event.target)) {
    menuList.classList.add("menu-list-hidden");
    menuList.classList.remove("menu-list-visible");
  }
});
