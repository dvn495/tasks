export class taskPending extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.showdata();
    }

    render() {
        this.innerHTML = `
            <style rel="stylesheet">
                @import "./../../css/styles.css";
            </style>
        `;
    }

    showdata = () => {
        const tasksContainer = document.querySelector('#pendingTask');
        const tasksUrl = `http://localhost:3000/tasks`;

        // Cargar tareas al cargar la página
        fetch(`${tasksUrl}`)
            .then(response => response.json())
            .then(tasksData => {
                tasksData.forEach(function (task) {
                    if (task.estado === "pendiente") {
                        const nameInput = task.nombre;
                        const inicioInput = task.fechaInicio;
                        const finInput = task.fechaFin;
                        const responsableInput = task.responsable;
                        const priorityInput = task.prioridad;

                        const taskDiv = document.createElement('div');
                        taskDiv.id = task.id;
                        taskDiv.innerHTML = `
                            <h2>${task.nombre}</h2>
                            <h4>Fecha inicio: ${task.fechaInicio}</h4>
                            <h4>Fecha fin: ${task.fechaFin}</h4> 
                            <h3>Nombre del responsable: ${task.responsable}</h3>  
                            <h2>Prioridad de tarea: ${task.prioridad}</h2>
                            <br>
                            <button class="complete">Completada</button>
                            <button class="incomplete">Incompleta</button>
                        `;
                        tasksContainer.appendChild(taskDiv);

                        // Event listener para el botón "Completada"
                        taskDiv.querySelector('.complete').addEventListener('click', function () {
                            updateTaskState('completada', task.id);
                        });

                        // Event listener para el botón "Incompleta"
                        taskDiv.querySelector('.incomplete').addEventListener('click', function () {
                            updateTaskState('incompleta', task.id);
                        });
                        const updateTaskState = (newState, taskId) => {
                            fetch(`${tasksUrl}/${taskId}`, {
                                method: 'PUT',
                                body: JSON.stringify({
                                    nombre: nameInput,
                                    fechaInicio: inicioInput,
                                    fechaFin: finInput,
                                    responsable: responsableInput,
                                    prioridad: priorityInput,
                                    estado: newState
                                }),
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })
                                .then(response => response.json())
                                .catch(error => {
                                    console.error('Error al actualizar el estado de la tarea:', error);
                                });
                        };
                    } else {
                        console.log("incompleto");
                    }
                     const updateTaskState = (newState, taskId) => {
            fetch(`${tasksUrl}/${taskId}`, {
                method: 'PUT',
                body: JSON.stringify({
                    nombre: nameInput,
                    fechaInicio: inicioInput,
                    fechaFin: finInput,
                    responsable: responsableInput,
                    prioridad: priorityInput,
                    estado: newState
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .catch(error => {
                    console.error('Error al actualizar el estado de la tarea:', error);
                });
        };
                });
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });

       
    }
}

customElements.define("task-pending", taskPending);
