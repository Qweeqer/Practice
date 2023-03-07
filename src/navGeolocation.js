if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
  console.log('Геолокація не підтримується в цьому браузері');
}

function successCallback(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(`Широта: ${latitude}, Довгота: ${longitude}`);
}

function errorCallback(error) {
  console.error(`Помилка отримання геопозиції: ${error.message}`);
}
