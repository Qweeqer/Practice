import { getCurrent, getLogOut, setToken, getHeaders } from './auth.js';
document.getElementById('home-button').addEventListener('click', () => {
  window.location.href = './weather.html';
});

const showProfileInfo = async () => {
  const currentUser = await getCurrent();
  const username = currentUser.name;
  const userEmail = currentUser.email;
  const userPassword = currentUser.password;

  const userInfo = document.getElementById('user-info');
  userInfo.innerHTML = `
    <p>Ім'я: ${username}</p>
    <p>Email: ${userEmail}</p>
    <p>Пароль: ${userPassword}</p>
  `;
  userInfo.style.display = 'block';
};

const handleLogout = async () => {
  try {
    await getLogOut();
    hideUserInfo();
      const logOutForm = document.getElementById('logout-button');
      window.location.href = './weather.html';
  } catch (error) {
    console.error(error);
    alert('Log Out Error');
  }
};
document
  .getElementById('profile-button')
  .addEventListener('click', showProfileInfo);

document
  .getElementById('logout-button')
  .addEventListener('click', handleLogout);

const showUserInfo = async () => {
  const currentUser = await getCurrent();
  const username = currentUser.name;

  const welcomeMessage = document.createElement('p');
  welcomeMessage.textContent = `Welcome, ${username}!`;
  const logOutForm = document.getElementById('logout-button');
  logOutForm.style.display = 'none';
  const userInfo = document.getElementById('UserInfo');

  if (userInfo) {
    userInfo.appendChild(welcomeMessage);
    userInfo.style.display = 'block';

    const logoutButton = document.getElementById('logout-button');
    logoutButton.style.display = 'block';
    logoutButton.addEventListener('click', handleLogout);
  }
};

const hideUserInfo = () => {
  const userInfo = document.getElementById('UserInfo');
  userInfo.style.display = 'none';

  const logoutButton = document.getElementById('logout-button');
  logoutButton.style.display = 'none';
};
