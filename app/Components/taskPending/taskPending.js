export class taskPending extends HTMLElement{
   constructor(){
       super();
       this.render();
   }
   render(){
       this.innerHTML = /* html*/`
            <style rel="stylesheet">
                @import "./../../css/styles.css";
            </style>;
       ` 
   }
 }
 customElements.define("task-pending", taskPending);