
/* Js File for my TODO Apps
by Ugbewi John Chioma
*/

const taskInputElement = document.getElementById('new-task'); // input Element
const taskList = document.getElementById('tasklist'); // Task List
// const list = document.querySelector('#tasklist');
const errorElement = document.getElementById('input-error');
// const addButton = document.getElementsByName('addButton');
const addButton = document.getElementsByName('addButton')[0];

// validate Task
const validateTask = () => {
  const patten = /^[\w ]+$/; // /^[A-Za-z0-9 ]+$/;
  if (patten.test(taskInputElement.value) && taskInputElement.value !== '') {
    errorElement.textContent = '';
    addButton.removeAttribute('disabled');
  } else {
    errorElement.textContent = 'Invalid Input';
    addButton.setAttribute('disabled', '');
  }
};

/* input validation */
taskInputElement.addEventListener('keydown', () => { // use focus or keydown
  // setInterval(validateTask, 500);
  setTimeout(validateTask, 100);
});

/* add input value to task list */
addButton.addEventListener('click', (event) => {
  const task = taskInputElement.value;
  if (task === '') {
    event.preventDefault();
  }

  /* Create Elements needed */

  // input
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.value = task;

  // label
  const label = document.createElement('label');
  label.textContent = task;

  // list
  const list = document.createElement('li');

  /* Append Elements */
  list.appendChild(input);
  list.appendChild(label);
  // list first child
  const listFirstChild = taskList.firstChild;
  // Insert the new element before the first child
  // taskList.appendChild(list);
  taskList.insertBefore(list, listFirstChild);

  /* Save task in arrary */

  /* empty Add Task Input field */
  taskInputElement.value = '';
  addButton.setAttribute('disabled', '');
  taskInputElement.focus();
});

/* completed Task */
taskList.addEventListener('click', (ev) => {
  const elm = ev.target;
  if (elm.tagName === 'INPUT') {
  //  console.log(elm);
    // elm.parentElement.classList.add('completed-task');
    elm.parentElement.classList.toggle('completed-task');
  }
}, false);
