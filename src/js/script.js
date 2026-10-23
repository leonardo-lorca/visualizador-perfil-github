import { fetchGithubUser, GithubApiError } from "./github-api.js";
import {
  clearProfile,
  renderLoading,
  renderProfile,
} from "./profile-view.js";

const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");

btnSearch.addEventListener("click", async () => {
  const userName = inputSearch.value;

  if (!userName) {
    alert("Por favor, digite o nome do usuário do GitHub");
    return;
  }

  renderLoading();

  try {
    const userData = await fetchGithubUser(userName);
    renderProfile(userData);
  } catch (error) {
    clearProfile();

    if (error instanceof GithubApiError) {
      alert(
        "Usuário não encontrado. Por favor, verifique o nome do usuário e tente novamente.",
      );
      return;
    }

    console.error("Erro ao buscar o perfil de usuário:", error);
    alert(
      "Ocorreu um erro ao buscar o perfil do usuário. Por favor tente novamente mais tarde.",
    );
  }
});
