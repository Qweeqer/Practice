const env = Object.freeze({
  FORMSPREE_KEY: 'https://formspree.io/f/xeqwkgka',
  // add other keys and values from your .env file here
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', env.FORMSPREE_KEY);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      form.reset();
      alert(
        "Дякуємо за ваше повідомлення! Ми зв'яжемось з вами найближчим часом."
      );
    } else {
      alert(
        'Під час відправки повідомлення сталася помилка. Спробуйте ще раз.'
      );
    }
  };
  xhr.send(formData);
});
