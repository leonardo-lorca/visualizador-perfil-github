const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.querySelector(".profile-results");

const BASE_URL = "https://api.github.com";

btnSearch.addEventListener("click", async () => {
  const userName = inputSearch.value;

  if (userName) {
    try {
      // Exibe a mensagem de carregamento na tela
      profileResults.innerHTML = '<p class="loading">Carregando...</p>';

      const response = await fetch(`${BASE_URL}/users/${userName}`);

      if (!response.ok) {
        // Limpa a mensagem de carregamento em caso de erro
        profileResults.innerHTML = "";
        alert(
          "Usuário não encontrado. Por favor, verifique o nome do usuário e tente novamente.",
        );
        return;
      }

      const userData = await response.json();
      console.log(userData); //apenas para verificar se os dados foram obtidos corretamente

      profileResults.innerHTML = `
      <div class ="profile-card">
      <img src = "${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
      <div class="profile-info">
      <h2>${userData.name || userData.login}</h2>
      <p>${userData.bio || "Não possui bio cadastrada.😪"}</p>
      </div>
      </div>`;
    } catch (error) {
      // Limpa a mensagem de carregamento em caso de erro de conexão
      profileResults.innerHTML = "";
      console.error("Erro ao buscar o perfil de usuário:", error);
      alert(
        "Ocorreu um erro ao buscar o perfil do usuário. Por favor tente novamente mais tarde.",
      );
    }
  } else {
    alert("Por favor, digite o nome do usuário do GitHub");
  }
});
