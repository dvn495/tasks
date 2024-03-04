/*import "./app/Components/taskList/tasksList.js"
import "./app/Components/taskPending/taskPending.js"
import "./app/Components/tasksForComplete/taskForComplete.js"*/

document.addEventListener('DOMContentLoaded', function() {
    const tasksContainer = document.querySelector('#pendingTask')
    const tasks = 'tasks.json'

    fetch(tasks)
    .then( response => response.json() )
    .then( tasksData => tasksData.forEach(function(tasks) {
        tasksContainer.innerHTML += `
        <div id=${tasks.id}>
            <h2>${tasks.nombre}</h2>
            <h4>Author: ${tasks.fechaIncio}</h4>
            <h2>${book.prioridad}</h2>
            <button data-id="${tasks.id}" id="edit-${tasks.id}" data-action="edit">Edit</button>
            <button data-id="${tasks.id}" id="delete-${tasks.id}" data-action="delete">Delete</button>
        </div>`
    })) // end of book fetch

})
