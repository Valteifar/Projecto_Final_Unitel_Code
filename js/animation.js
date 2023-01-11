const article = document.querySelector("#sobre-conteudo");
const button = document.querySelector("#ler-mais");

button.addEventListener("click", readMore);

function readMore() {
    if (article.className == "open") {
      // Ler menos
    article.className = "";
    document.querySelector('.icon-sobre').src = "../img/baixo.png";
  } else {
    article.className = "open";
    document.querySelector('.icon-sobre').src = "../img/cima.png";
  }
}