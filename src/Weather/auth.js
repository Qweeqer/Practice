const BASE_URL = 'https://connections-api.herokuapp.com';
let token = '';

export const setToken = newToken => {
  token = newToken;
};

export const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
};

// const headers = {
//   'Content-Type': 'application/json',
//   Authorization: `Bearer ${token}`,
// };

const getSignUp = async data => {
  const options = {
    method: 'POST',
    headers: getHeaders(),
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
    headers: getHeaders(),
    body: JSON.stringify(data),
  };

  const response = await fetch(`${BASE_URL}/users/login`, options);
  const result = await response.json();
  if (response.ok) {
    // перевірка статусу відповіді сервера
    setToken(result.token);
    return result;
  } else {
    throw new Error(result.message || 'Login failed');
  }
};

export const getLogOut = async () => {
  const options = {
    method: 'POST',
    headers: getHeaders(),
  };

  const response = await fetch(`${BASE_URL}/users/logout`, options);
  const data = await response.json();
  setToken('');
  return data;
};

export const getCurrent = async () => {
  if (!token) {
    return null;
  }

  const options = {
    method: 'GET',
    headers: getHeaders(),
  };

  try {
    const response = await fetch(`${BASE_URL}/users/current`, options);

    if (response.status === 401) {
      setToken('');
      throw new Error('Unauthorized');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    setToken('');
    throw error;
  }
};

const handleLogout = async () => {
  try {
    await getLogOut();
    hideUserInfo();
    const loginForm = document.getElementById('Login');
    loginForm.style.display = 'block';
  } catch (error) {
    console.error(error);
    alert('Log Out Error');
  }
};

const showUserInfo = async () => {
  const currentUser = await getCurrent();
  const username = currentUser.name;
  const welcomeMessage = document.createElement('p');
  welcomeMessage.textContent = `Welcome, ${username}!`;
  const loginForm = document.getElementById('Login');
  loginForm.style.display = 'none';
  const userInfo = document.getElementById('UserInfo');

  if (userInfo) {
    userInfo.appendChild(welcomeMessage);
    userInfo.style.display = 'block';

    const logoutButton = document.createElement('button');
    logoutButton.id = 'logout-button';
    logoutButton.textContent = 'Log Out';
    userInfo.appendChild(logoutButton);
    logoutButton.addEventListener('click', handleLogout);
  }
};

const hideUserInfo = () => {
  const userInfo = document.getElementById('UserInfo');
  userInfo.style.display = 'none';
};

const init = async () => {
  try {
    const currentUser = await getCurrent();
    if (currentUser) {
      showUserInfo();
    } else {
      hideUserInfo();
    }
  } catch (error) {
    console.error(error);
    hideUserInfo();
  }
};

const registerForm = document.getElementById('register-form');
if (registerForm) {
  registerForm.addEventListener('submit', async event => {
    event.preventDefault();

    const { firstName, email, password, confirmPassword } =
      event.target.elements;

    try {
      await getSignUp({
        name: firstName.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
      });

      setTimeout(async () => {
        const userContainer = document.getElementById('UserInfo');
        const user = await getCurrent();
        console.log('user', user);
        if (user) {
          userContainer.innerHTML = `<p>Ім’я користувача: ${user.name}</p> <p>Email: ${user.email}</p>`;

          const logoutButton = document.createElement('button');
          logoutButton.id = 'logout-button';
          logoutButton.textContent = 'Log Out';
          userContainer.appendChild(logoutButton);
          logoutButton.addEventListener('click', handleLogout);

          register.style.display = 'none';
          dark.style.display = 'none';
          showUserInfo();
          window.location.href = 'profile.html';
        } else {
          throw new Error('User is null');
        }
      }, 2000);
    } catch (error) {
      console.error(error);
      alert('Registration Error: ' + error);
    }
  });
}
const loginForm = document.getElementById('login-form');

if (loginForm) {
  loginForm.addEventListener('submit', async event => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    try {
      await getLogIn({
        email: email.value,
        password: password.value,
      });
      login.style.display = 'none';
      dark.style.display = 'none';
      showUserInfo();
      window.location.href = 'profile.html';
    } catch (error) {
      console.error(error);
      alert('Login Error: ' + error);
    }
  });
}

const handleTodayButtonClick = async () => {
  try {
    const response = await fetch(`${BASE_URL}/today`, {
      headers: getHeaders(),
    });
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    console.error(error);
    alert('Weather get Error');
  }
};

const handleThreeDayButtonClick = async () => {
  try {
    const response = await fetch(`${BASE_URL}/three`, {
      headers: getHeaders(),
    });
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    console.error(error);
    alert('Weather get Error');
  }
};

const handleSevenDayButtonClick = async () => {
  try {
    const response = await fetch(`${BASE_URL}/seven`, {
      headers: getHeaders(),
    });
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    console.error(error);
    alert('Weather get Error');
  }
};

const displayWeatherData = data => {
  const weatherContainer = document.getElementById('weather-container');
  weatherContainer.innerHTML = '';

  data.forEach(day => {
    const { date, description, temperature, humidity } = day;
    const dayContainer = document.createElement('div');
    dayContainer.classList.add('weather-day');

    const dateElement = document.createElement('p');
    dateElement.textContent = date;
    dayContainer.appendChild(dateElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    dayContainer.appendChild(descriptionElement);

    const temperatureElement = document.createElement('p');
    temperatureElement.textContent = `Температура: ${temperature} °C`;
    dayContainer.appendChild(temperatureElement);

    const humidityElement = document.createElement('p');
    humidityElement.textContent = `Вологість: ${humidity} %`;
    dayContainer.appendChild(humidityElement);

    weatherContainer.appendChild(dayContainer);
  });
};

// ініціалізація додатка
document.addEventListener('DOMContentLoaded', () => {
  init();
});

let regButton = document.getElementById('reg-button');
let logButton = document.getElementById('log-button');
let buttonX1 = document.getElementById('button-x1');
let buttonX2 = document.getElementById('button-x2');
let register = document.getElementById('Register');
let login = document.getElementById('Login');
let dark = document.getElementById('dark');

if (regButton) {
  regButton.addEventListener('click', function () {
    dark.style.display = 'block';
    register.style.display = 'block';
    register.style.animation = 'slideDown 400ms ease';
  });
}
if (buttonX1) {
  buttonX1.addEventListener('click', function () {
    register.style.display = 'none';
    dark.style.display = 'none';
  });
}
if (logButton) {
  logButton.addEventListener('click', function () {
    dark.style.display = 'block';
    login.style.display = 'block';
    login.style.animation = 'slideDown 400ms ease';
  });
}
if (buttonX2) {
  buttonX2.addEventListener('click', function () {
    login.style.display = 'none';
    dark.style.display = 'none';
  });
}
// *********************NOTE***********************
// const updateUserInfo = async () => {
//   try {
//     const currentUser = await getCurrent(); // получаем данные о текущем пользователе
//     const userInfo = document.getElementById('user-info');
//     userInfo.innerHTML = `Hello, ${currentUser.name} (${currentUser.email})`; // обновляем элемент с информацией о пользователе
//   } catch (error) {
//     console.error(error);
//   }
// };

// const handleLogin = async event => {
//   event.preventDefault();
//   const email = document.getElementById('login-email').value;
//   const password = document.getElementById('login-password').value;
//   const loginData = { email, password };

//   try {
//     const result = await getLogIn(loginData);
//     setToken(result.token);
//     updateUserInfo(); // обновляем элемент с информацией о пользователе
//     login.style.display = 'none';
//     dark.style.display = 'none';
//   } catch (error) {
//     console.error(error);
//   }
// };
