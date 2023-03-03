// To - Do List
// Створіть програму для створення списку завдань.
// Завдання можна додавати, редагувати та видаляти.
// Кожне завдання має включати назву та опис.
// Ви можете використовувати локальне сховище браузера для
// зберігання даних.
// Використовувати html, css, JavaScript
// Отримуємо список завдань з локального сховища
let taskList = JSON.parse(localStorage.getItem('taskList')) || [];

// Отримуємо елементи форми та списку завдань з HTML
const taskForm = document.getElementById('taskForm');
const taskNameInput = document.getElementById('taskName');
const taskDescriptionInput = document.getElementById('taskDescription');
const taskListElement = document.getElementById('taskList');

// Функція для додавання нового завдання
function addTask(name, description) {
  // Створюємо новий об'єкт завдання
  const task = {
    name,
    description,
    completed: false
  };

  // Додаємо завдання до списку
  taskList.push(task);

  // Оновлюємо список завдань в локальному сховищі
  localStorage.setItem('taskList', JSON.stringify(taskList));

  // Оновлюємо список завдань в HTML
  updateTaskList();
}

// Функція для оновлення списку завдань в HTML
function updateTaskList() {
  // Очищаємо список завдань
  taskListElement.innerHTML = '';

  // Додаємо кожне завдання до списку
  taskList.forEach((task, index) => {
    // Створюємо новий елемент списку
const taskElement = document.createElement('li');

// Додаємо назву завдання до елемента списку
const taskNameElement = document.createElement('h3');
taskNameElement.innerText = task.name;
taskElement.appendChild(taskNameElement);

// Додаємо опис завдання до елемента списку
const taskDescriptionElement = document.createElement('p');
taskDescriptionElement.innerText = task.description;
taskElement.appendChild(taskDescriptionElement);

// Додаємо кнопки для редагування та видалення завдання
const editButton = document.createElement('button');
editButton.innerText = 'Редагувати';
editButton.addEventListener('click', () => {
  editTask(index);
});
taskElement.appendChild(editButton);

const deleteButton = document.createElement('button');
deleteButton.innerText = 'Видалити';
deleteButton.addEventListener('click', () => {
  deleteTask(index);
});
taskElement.appendChild(deleteButton);

// Додаємо елемент списку до списку завдань в HTML
taskListElement.appendChild(taskElement);
}); }

// Функція редагування завдання 
function editTask(index) {
    // Виконуємо завдання за індексом 
    const task = taskList[index];

    // Заповнюємо поля форми інформації про завдання 
    taskNameInput.value = task.name;
    taskDescriptionInput.value = task.description;

    // Видаляємо завдання зі списку 
    taskList.splice(index, 1);

    // Оновлюємо список завдань у локальному сховищі 
    localStorage.setItem('taskList', JSON.stringify(taskList));

    // Оновлюємо список завдань у HTML 
    updateTaskList();
}

// Функція для видалення завдання 
function deleteTask(index) {
    // Видаляємо завдання зі списку 
    taskList.splice(index, 1);

    // Оновлюємо список завдань у локальному сховищі 
    localStorage.setItem('taskList', JSON.stringify(taskList));

    // Оновлюємо список завдань у HTML 
    updateTaskList();
}

// Обробник подій для додавання нового завдання 
taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

const taskName = taskNameInput.value; const taskDescription = taskDescriptionInput.value;

addTask(taskName, taskDescription);

    // Очищуємо поля форми після додавання завдання 
    taskNameInput.value = ''; taskDescriptionInput.value = '';
});

// Оновлюємо список завдань у HTML при завантаженні сторінок 
updateTaskList();