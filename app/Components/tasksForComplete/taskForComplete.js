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
       ` 
   }
   complete = () => {
        pass
}
}
customElements.define("task-for", taskForComplete);