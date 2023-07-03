//função que add taferas
function addTask() {
    
    const taskTitle = document.querySelector("#task-title").value; 

    //clona template
    if(taskTitle) {
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        //add titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        //remover classes não necessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //add tarefa na lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        //add evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        })

        //add evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this);
        }); 

        //limpar texto 
        document.querySelector("#task-title").value = "";
    }

    
}
//função remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}

//função completar tarefa
    function completeTask(task) {
        
        const taskToComplete = task.parentNode;

        taskToComplete.classList.toggle("done");
    }

//evento de adicionar tarefas

const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {

    e.preventDefault();

    addTask();
    
});