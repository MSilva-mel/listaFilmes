document.addEventListener("DOMContentLoaded", function () {
  const filmeForm = document.getElementById("addfilme");
  const tituloInput = document.getElementById("titulo");
  const generoInput = document.getElementById("genero");
  const avInput = document.getElementById("av");
  const listaFilme = document.getElementById("listafilme");

  filmeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const titulo = tituloInput.value;
    const genero = generoInput.value;
    const avaliacao = avInput.value;

    if (titulo && genero && avaliacao) {
      const filmeItem = document.createElement("li");
      filmeItem.classList.add("movie-item");

      if (titulo.toLowerCase() === "avatar") {
        filmeItem.innerHTML = `
          <span><strong>Título:</strong> ${titulo}, <strong>Gênero:</strong> ${genero}, <strong>Avaliação:</strong> ${avaliacao}</span>
          <p>Avatar é um filme de ficção científica dirigido por James Cameron. É conhecido por suas impressionantes cenas de ação e efeitos visuais.</p>
          <button class="delete-btn">Excluir</button>
        `;
      } else if (titulo.toLowerCase() === "enrolados") {
        filmeItem.innerHTML = `
          <span><strong>Título:</strong> ${titulo}, <strong>Gênero:</strong> ${genero}, <strong>Avaliação:</strong> ${avaliacao}</span>
          <p>Rapunzel, a princesa que foi raptada do castelo de seus pais quando bebê é mantida presa em uma torre e sonha com aventuras.</p>
          <button class="delete-btn">Excluir</button>
        `;
      } else if (titulo.toLowerCase() === "mulan") {
        filmeItem.innerHTML = `
          <span><strong>Título:</strong> ${titulo}, <strong>Gênero:</strong> ${genero}, <strong>Avaliação:</strong> ${avaliacao}</span>
          <p>Conta a jornada de uma menina que se disfarça de homem para se juntar ao exército chinês.</p>
          <button class="delete-btn">Excluir</button>
        `;
      } else if (titulo.toLowerCase() === "valente") {
        filmeItem.innerHTML = `
          <span><strong>Título:</strong> ${titulo}, <strong>Gênero:</strong> ${genero}, <strong>Avaliação:</strong> ${avaliacao}</span>
          <p>Embora filha da nobreza, Merida preferiria entrar para a história como uma arqueira de sucesso. Confrontando os desejos de sua mãe, a princesa toma uma atitude impensada, que coloca em perigo o reino e a vida de sua família.</p>
          <button class="delete-btn">Excluir</button>
        `;
      } else {
        filmeItem.innerHTML = `
          <span><strong>Título:</strong> ${titulo}, <strong>Gênero:</strong> ${genero}, <strong>Avaliação:</strong> ${avaliacao}</span>
          <button class="delete-btn">Excluir</button>
        `;
      }

      listaFilme.appendChild(filmeItem);

      tituloInput.value = "";
      generoInput.value = "";
      avInput.value = "";

      const deletar = filmeItem.querySelector(".delete-btn");
      deletar.addEventListener("click", function () {
        listaFilme.removeChild(filmeItem);
      });
    }
  });
});
