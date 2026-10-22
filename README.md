# visualizador-perfil-github

Endpoints que vamos usar
Pefil: GET /users/:username

Repositórios: GET /users/:username/repos/ (usar query per_page=10 e sort=updaten/ sort/pushed conforme objetivo)


// melhorias futuras

// Dica extra para iniciantes: permitir buscar também ao apertar a tecla "Enter" no teclado
inputSearch.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    btnSearch.click(); // Simula o clique no botão
  }
});