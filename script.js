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
// Like e Deslike Animação
let likeCount = 0;
let dislikeCount = 0;
let isLiked = false;
let isDisliked = false;

const likeUpBtn = document.querySelector(".like-up");
const likeDownBtn = document.querySelector(".like-down");
const likeCountSpan = document.getElementById("likeCount");
const dislikeCountSpan = document.getElementById("dislikeCount");

likeUpBtn.addEventListener("click", () => {
  if (!isLiked) {
    likeCount++;
    if (isDisliked) {
      dislikeCount--;
      isDisliked = false;
      likeDownBtn.classList.remove("active");
    }
    isLiked = true;
    likeUpBtn.classList.add("active");
  } else {
    likeCount--;
    isLiked = false;
    likeUpBtn.classList.remove("active");
  }
  updateCounts();
});

likeDownBtn.addEventListener("click", () => {
  if (!isDisliked) {
    dislikeCount++;
    if (isLiked) {
      likeCount--;
      isLiked = false;
      likeUpBtn.classList.remove("active");
    }
    isDisliked = true;
    likeDownBtn.classList.add("active");
  } else {
    dislikeCount--;
    isDisliked = false;
    likeDownBtn.classList.remove("active");
  }
  updateCounts();
});

function updateCounts() {
  likeCountSpan.textContent = likeCount;
  dislikeCountSpan.textContent = dislikeCount;
}
// Botão de incrição
const inscreverBtn = document.querySelector(".inscrever");

inscreverBtn.addEventListener("click", () => {
  if (inscreverBtn.classList.contains("inscrito")) {
    // Voltar para "Inscrever-se"
    inscreverBtn.classList.remove("inscrito");
    inscreverBtn.textContent = "Inscrever-se";
  } else {
    // Mudar para "Inscrito"
    inscreverBtn.classList.add("inscrito");
    inscreverBtn.textContent = "Inscrito";
  }
});
// Abrir os links em uma nova guia
document.querySelectorAll("a").forEach(function (link) {
  if (!link.classList.contains("ignore") && !link.getAttribute("data-ignore")) {
    link.setAttribute("target", "_blank");
  }
});
