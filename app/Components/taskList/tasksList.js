export class taskList extends HTMLElement{
   constructor(){
       super();
       this.render();
   }
   render(){
       this.innerHTML = /* html*/`
            <style rel="stylesheet">
                @import "/../../../css/styles.css";
            </style>
            <section class="container-tasks">
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
                        <input id="fechaFin type="date">
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
                <input type="submit" value="add task">
            </section>
       `
   }
 }
 
customElements.define("task-list", taskList);
