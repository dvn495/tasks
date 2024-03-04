import "./app/Components/taskList/tasksList.js"
import "./app/Components/taskPending/taskPending.js"
import "./app/Components/tasksForComplete/taskForComplete.js"

document.addEventListener('DOMContentLoaded', function() {
        const tasksContainer = document.querySelector('#pendingTask');
        console.log(tasksContainer);
        const tasksUrl = 'tasks.json';
        console.log(tasksUrl);
        fetch(tasksUrl)
        .then(response => response.json())
        .then(data => {
            const tasksData = data.tasks; // Accede a la propiedad 'tasks' del objeto JSON
            tasksData.forEach(function(task) {
                tasksContainer.innerHTML += `
                <div id="${task.id}">
                    <h2>${task.nombre}</h2>
                    <h4>Author: ${task.fechaInicio}</h4>
                    <h2>${task.prioridad}</h2>
                    <button data-id="${task.id}" id="edit-${task.id}" data-action="edit">Edit</button>
                    <button data-id="${task.id}" id="delete-${task.id}" data-action="delete">Delete</button>
                </div>`;
            });
        })
        .catch(error => {
            console.error('Error fetching tasks:', error);
        });
    });


