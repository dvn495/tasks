export class taskForComplete extends HTMLElement{
   constructor(){
       super();
       this.render();
       this.complete();
   }
   render(){
       this.innerHTML = /* html*/`
            <style rel="stylesheet">
                @import "./../../css/styles.css";
            </style>
            <div id="complete">
                <h2>Task Completed!</h2>
            </div>
            <div id="incomplete">
                <h2>Incomplete Tasks</h2>
            </div>
       ` 
   }
   complete = () => {
    const tasksUrl = `http://localhost:3000/tasks`;
    const taskComplete = document.getElementById("complete");
    const taskIncomplete = document.getElementById("incomplete");

    // Cargar tareas al cargar la página
    fetch(`${tasksUrl}`)
        .then(response => response.json())
        .then(tasksData => {
            tasksData.forEach(function (task) {
                if (task.estado === "completada") {
                    const taskDiv = document.createElement('div');
                    taskDiv.id = task.id;
                    taskDiv.innerHTML = `
                        <h2>${task.nombre}</h2>
                        <h4>Fecha inicio: ${task.fechaInicio}</h4>
                        <h4>Fecha fin: ${task.fechaFin}</h4> 
                        <h3>Nombre del responsable: ${task.responsable}</h3>  
                        <h2>Prioridad de tarea: ${task.prioridad}</h2>
                    `;
                    taskComplete.appendChild(taskDiv);
                } else if (task.estado === "incompleta") {
                    const taskDiv = document.createElement('div');
                    taskDiv.classList.add("incomplete")
                    taskDiv.id = task.id;
                    taskDiv.innerHTML = `
                        <h2>${task.nombre}</h2>
                        <h4>Fecha inicio: ${task.fechaInicio}</h4>
                        <h4>Fecha fin: ${task.fechaFin}</h4> 
                        <h3>Nombre del responsable: ${task.responsable}</h3>  
                        <h2>Prioridad de tarea: ${task.prioridad}</h2>
                    `;
                    taskIncomplete.appendChild(taskDiv);
                }
            })
        })
    }
}
customElements.define("task-for", taskForComplete);