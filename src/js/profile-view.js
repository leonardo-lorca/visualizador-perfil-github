const profileResults = document.querySelector(".profile-results");

export function clearProfile() {
  profileResults.replaceChildren();
}

export function renderLoading() {
  clearProfile();

  const loadingMessage = document.createElement("p");
  loadingMessage.className = "loading";
  loadingMessage.textContent = "Carregando...";
  profileResults.append(loadingMessage);
}

export function renderProfile(userData) {
  clearProfile();

  const profileCard = document.createElement("div");
  profileCard.className = "profile-card";

  const avatar = document.createElement("img");
  avatar.src = userData.avatar_url;
  avatar.alt = `Avatar de ${userData.name || userData.login}`;
  avatar.className = "profile-avatar";

  const profileInfo = document.createElement("div");
  profileInfo.className = "profile-info";

  const name = document.createElement("h2");
  name.textContent = userData.name || userData.login;

  const bio = document.createElement("p");
  bio.textContent = userData.bio || "Não possui bio cadastrada.😪";

  profileInfo.append(name, bio);
  profileCard.append(avatar, profileInfo);

  const counters = document.createElement("div");
  counters.className = "profile-counters";

  const followers = document.createElement("div");
  followers.className = "followers";
  const followersTitle = document.createElement("h4");
  followersTitle.textContent = "👥 Seguidores";
  const followersCount = document.createElement("span");
  followersCount.textContent = userData.followers;
  followers.append(followersTitle, followersCount);

  const following = document.createElement("div");
  following.className = "following";
  const followingTitle = document.createElement("h4");
  followingTitle.textContent = "👥 Seguindo";
  const followingCount = document.createElement("span");
  followingCount.textContent = userData.following;
  following.append(followingTitle, followingCount);

  counters.append(followers, following);
  profileResults.append(profileCard, counters);
}
