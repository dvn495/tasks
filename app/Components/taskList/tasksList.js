export class taskList extends HTMLElement{
   constructor(){
       super();
       this.render();
       this.addData();
   }
   render(){
       this.innerHTML = /* html*/`
            <style rel="stylesheet">
                @import "/../../../css/styles.css";
            </style>
            <form id="task-form"class="container-tasks">
                <h2>Nueva tarea</h2>
                <div class="container-task_name">
                    <h3>Nombre de la tarea</h3>
                    <input id="name" placeholder="ingresa el nombre">
                </div>
                <div class="container-task_dates">
                    <div class="dates-begin">
                        <h3>Fecha Inicio</h3>
                        <input id="fechaInicio" type="date">
                    </div>
                    <div class="dates-end">
                        <h3>Fecha Fin</h3>
                        <input id="fechaFin" type="date">
                    </div>
                </div>
                <div class="container-task_responsable">
                    <h3>Responsable de la tarea</h3>
                    <input id="responsable" placeholder="nombre del responsable">
                </div>
                <div class="container-task_priority">
                    <h3>Nivel de prioridad</h3>
                    <select id="priority">
                        <option value="empty">selecciona...</option>
                        <option value="inmediata">Inmediata</option>
                        <option value="alta">Alta</option>
                        <option value="media">Media</option>
                        <option value="baja">Baja</option>
                    </select>
                </div>
                <br>
                <input type="submit" value="añadir">
            </form>
       `
   }
    addData = () => {
    document.addEventListener('DOMContentLoaded', function() {
        const tasksContainer = document.querySelector('#pendingTask');
        const tasksUrl = `http://localhost:3000/tasks`;
        const taskForm = document.querySelector('#task-form');

        taskForm.addEventListener('submit', (e) => {
            e.preventDefault();
    
            const nameInput = taskForm.querySelector('#name').value;
            const inicioInput = taskForm.querySelector('#fechaInicio').value;
            const finInput = taskForm.querySelector('#fechaFin').value;
            const responsableInput = taskForm.querySelector('#responsable').value;
            const priorityInput = taskForm.querySelector('#priority').value;
    
            fetch(tasksUrl, {
                method: 'POST', // Agregar el método POST
                body: JSON.stringify({
                    nombre: nameInput,
                    fechaInicio: inicioInput,
                    fechaFin: finInput,
                    responsable: responsableInput,
                    prioridad: priorityInput,
                    estado: "pendiente"
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(task => {
                // Agregar la nueva tarea al contenedor de tareas
                tasksContainer.innerHTML += `
                <div id="${task.id}">
                    <h2>${task.nombre}</h2>
                    <h4>Fecha inicio: ${task.fechaInicio}</h4>
                    <h4>Fecha fin: ${task.fechaFin}</h4> 
                    <h3>Nombre del responsable: ${task.responsable}</h3>  
                    <h2>Prioridad de tarea: ${task.prioridad}</h2>
                </div>`;
            })
            .catch(error => {
                console.error('Error al añadir tarea:', error);
            });
        });
    });
   }
}
 
customElements.define("task-list", taskList);
