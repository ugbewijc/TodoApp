/**
Js File for my TODO Apps
by John Chioma
*/

const taskInputElement = document.getElementById('task'); // input Element
const taskList = document.getElementById('tasklist'); // Task List
const errorElement = document.getElementById('input-error');
//const addButton = document.getElementsByName('addButton')[0];
const closeButton = document.getElementById('delete_task');


const createTask = (task) => {
  /* Create Elements needed */
  // list
  const list = document.createElement('li');
  list.innerHTML= `
  <input class="todo__task-checkbox" name="${task}" type="checkbox" value="${task}">
  <label for="${task}">${task}</label>
  <button id="delete_task"class="todo__delete-task" type="button" name="${task}">&times</button>
  `;

  // list first child
  //const listFirstChild = taskList.firstChild;
  // Insert the new element before the first child
  taskList.appendChild(list);
  //taskList.insertBefore(list, listFirstChild);

  /* Save task in arrary */

};

const addTask = () => {
  const task = taskInputElement.value;
  if (task) {
    createTask(task);
  }

  /** Empty Add Task Input field */
  taskInputElement.value = '';
  taskInputElement.focus();
};

const removeHtmlElement = (htmlElement) => {
  htmlElement.remove();
};

taskInputElement.addEventListener('keydown', (e) => {
  if (e.key ==="Enter") {
    addTask();
  }
});

/* completed Task
taskList.addEventListener('click', (ev) => {
const elm = ev.target;
if (elm.tagName === 'INPUT') {
elm.parentElement.classList.toggle('completed-task');
}
}, false);*/

document.addEventListener('click', (e) => {
  if (e.target.id ==="delete_task") {
    removeHtmlElement(e.target.parentElement);
  };
});
