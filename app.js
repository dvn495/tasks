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
        const taskForm = document.querySelector('task-list')
        taskForm.addEventListener('submit', (e) => {
            e.preventDefault()
            console.log(e.target)
            
            const titleInput = bookForm.querySelector('#title').value
            const authorInput = bookForm.querySelector('#author').value
            const coverImageInput = bookForm.querySelector('#coverImage').value
            const descInput = bookForm.querySelector('#description').value

            fetch(`${bookURL}`, {
                method: 'POST',
                body: JSON.stringify({
                  nombre: titleInput,
                  fechaInicio: authorInput,
                  fechaFin: coverImageInput,
                  responsable: descInput,
                  prioridad: priorityInput
                }),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
            .then( response => response.json())
            .then( book => {
                    bookContainer.innerHTML += `
                    <div id=${book.id}>
                    <h2>${book.title}</h2>
                    <h4>Author: ${book.author}</h4>
                    <img src="${book.coverImage}" width="333" height="500">
                    <p>${book.description}</p>
                    <button data-id="${book.id}" id="edit-${book.id}" data-action="edit">Edit</button>
                    <button data-id="${book.id}" id="delete-${book.id}" data-action="delete">Delete</button>
                    </div>`
            })
       })
       

    });


