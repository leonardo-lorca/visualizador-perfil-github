# 🐙 Visualizador de Perfil do GitHub

Uma aplicação web moderna e responsiva que permite consultar qualquer usuário do GitHub em tempo real, consumindo a **API pública do GitHub**.

---

## 🚀 Demonstração das Funcionalidades

- **Busca Rápida:** Pesquise por nome de usuário clicando no botão **Buscar** ou simplesmente pressionando a tecla **Enter**.
- **Dados do Perfil:** Exibe avatar, nome, biografia, número de seguidores e pessoas seguidas.
- **Repositórios Recentes:** Lista os últimos repositórios do usuário com métricas úteis (estrelas ⭐, forks 🍴, watchers 👀 e linguagem principal 💻).
- **Interface Responsiva & Animada:** Layout adaptável para celular e desktop, com gradiente dinâmico e animações suaves.
- **Tratamento de Erros:** Mensagens amigáveis para campos vazios ou quando o usuário não for encontrado.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica da página.
- **CSS3:** Estilização com variáveis customizadas, Flexbox, efeitos visuais e responsividade.
- **JavaScript (ES6+):** 
  - `async` / `await` e `fetch` para consumo de APIs assíncronas.
  - Módulos ES (`import` / `export`) para organização limpa e separação de responsabilidades.
- **GitHub REST API:** Fonte dos dados de perfil e repositórios.
- **Devicon & Google Fonts:** Ícones e tipografia (Inter).

---

## 📂 Estrutura de Arquivos

```text
visualizador-perfil-github/
├── index.html              # Estrutura principal da página
├── README.md               # Documentação do projeto
└── src/
    ├── css/
    │   ├── reset.css       # Limpeza e padronização de estilos padrão
    │   ├── styles.css      # Variáveis, tema global e layout
    │   ├── animations.css  # Efeitos de transição e animações
    │   └── responsive.css  # Regras de mídia para telas menores
    └── js/
        ├── github-api.js   # Funções que fazem as requisições à API do GitHub
        ├── profileView.js  # Renderização do HTML com os dados do perfil
        └── script.js       # Ponto de entrada, eventos de clique e tecla Enter
```

---

## 💻 Como Executar o Projeto Localmente

Como o projeto utiliza **JavaScript Modules** (`type="module"` no `index.html`), o navegador requer que os arquivos sejam servidos através de um servidor web local por questões de segurança (CORS).

### Opção 1: Usando o Live Server no VS Code (Recomendado)

1. Abra a pasta do projeto no **VS Code**.
2. Instale a extensão **Live Server** (caso ainda não tenha).
3. Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"** (ou clique em **"Go Live"** na barra inferior).
4. O projeto abrirá automaticamente no seu navegador padrão no endereço `http://127.0.0.1:5500`.

### Opção 2: Usando o Node.js / npx

Se tiver o Node instalado, você pode rodar no terminal dentro da pasta do projeto:

```bash
npx serve .
```

---

## 🌐 Endpoints da API Utilizados

- **Perfil do Usuário:**
  ```http
  GET https://api.github.com/users/{username}
  ```
- **Repositórios:**
  ```http
  GET https://api.github.com/users/{username}/repos?per_page=10&sort=created
  ```

---

## 📝 Licença

Este projeto foi desenvolvido para fins didáticos e práticos de estudo em desenvolvimento web front-end. Sinta-se livre para usá-lo e customizá-lo!
