

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
        // Criar um novo item de filme
        const filmeItem = document.createElement("li");
        filmeItem.classList.add("movie-item");
        filmeItem.innerHTML = `
          <span><strong>Título:</strong> ${titulo}, <strong>Gênero:</strong> ${genero}, <strong>Avaliação:</strong> ${avaliacao}</span>
          <button class="delete-btn">Excluir</button>
        `;
  
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
  