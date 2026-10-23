const BASE_URL = "https://api.github.com";

export class GithubApiError extends Error {
  constructor(status) {
    super(`A API do GitHub respondeu com o status ${status}.`);
    this.name = "GithubApiError";
    this.status = status;
  }
}

export async function fetchGithubUser(userName) {
  const response = await fetch(
    `${BASE_URL}/users/${encodeURIComponent(userName)}`,
  );

  if (!response.ok) {
    throw new GithubApiError(response.status);
  }

  return response.json();
}
