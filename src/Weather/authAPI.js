const BASE_URL = 'https://connections-api.herokuapp.com';
let token = '';

const setToken = newToken => {
  token = newToken;
};

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
};

const getSignUp = async data => {
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  };

  const response = await fetch(`${BASE_URL}/users/signup`, options);
  const result = await response.json();
  setToken(result.token);
  return result;
};

const getLogIn = async data => {
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  };

  const response = await fetch(`${BASE_URL}/users/login`, options);
  const result = await response.json();
  setToken(result.token);
  return result;
};

const getLogOut = async () => {
  const options = {
    method: 'POST',
    headers,
  };

  const response = await fetch(`${BASE_URL}/users/logout`, options);
  const data = await response.json();
  setToken('');
  return data;
};

const getCurrent = async () => {
  const options = {
    method: 'GET',
    headers,
  };

  try {
    const response = await fetch(`${BASE_URL}/users/current`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    setToken('');
    throw error;
  }
};

// const showUserInfo = async () => {
//   const currentUser = await getCurrent();
//   const username = currentUser.name;
//   const welcomeMessage = document.createElement('p');
//   welcomeMessage.textContent = `Welcome, ${username}!`;
//   const loginForm = document.getElementById('Login');
//   loginForm.style.display = 'none';
//   const userInfo = document.getElementById('UserInfo');
//   userInfo.appendChild(welcomeMessage);
//   userInfo.style.display = 'block';
//   const logoutButton = document.createElement('button');
//   logoutButton.id = 'logout-button';
//   logoutButton.textContent = 'Log Out';
//   userInfo.appendChild(logoutButton);
//   logoutButton.addEventListener('click', handleLogout);
// };

// const hideUserInfo = () => {
//   const userInfo = document.getElementById('UserInfo');
//   userInfo.style.display = 'none';
// };

// const updateUserInfo = () => {
//   const userContainer = document.getElementById('user-info');
//   userContainer.innerHTML = '';
// };

// const handleLogout = async () => {
//   try {
//     await getLogOut();
//     setToken('');
//     updateUserInfo();
//     hideUserInfo();
//   } catch (error) {
//     console.error(error);
//     alert('Ошибка при выходе из системы');
//   }
// };


export { getSignUp, getLogIn, getLogOut, getCurrent };