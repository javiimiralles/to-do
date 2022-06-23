'use strict'

//info date
const dateNumber = document.getElementById('dateNumber');
const dateWeekday = document.getElementById('dateWeekday');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

//task container
const taskContainer = document.getElementById('taskContainer');

function setDate() {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' }); //día en valor numérico
    dateWeekday.textContent = date.toLocaleString('es', { weekday: 'long' }); //día de la semana-> se ve todo el texto (miércoles)
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' }); //mes -> se ve el texto parcialmente (Sept.)
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' }); //año en valor numérico
}

function addNewTask(evt) {
    evt.preventDefault();

    let taskText = document.getElementById('taskText').value;

    if(taskText.length != 0){
        const task = document.createElement('div');
        task.classList.add('toDo');
        task.addEventListener('click', changeTaskState);
        task.textContent = taskText;
        taskContainer.prepend(task);
        event.target.reset();
    }
}

function changeTaskState(task) {
    let state = task.target;

    if(state.className == 'toDo'){
        state.classList.remove('toDo');
        state.classList.add('done');
    } else{
        state.classList.remove('done');
        state.classList.add('toDo');
    }
}

setDate();



