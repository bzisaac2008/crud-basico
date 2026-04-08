const input = document.getElementById('taskInput');
const btn = document.getElementById('addTaskBtn');
const list = document.getElementById('taskList');
function addTask() {
    const taskText = input.value;

    
    if (taskText.trim() !== "") {
        
       
        const li = document.createElement('li');
        
        
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Excluir</button>
        `;

        list.appendChild(li);

       
        input.value = "";
    } else {
            alert("digite alguma tarefa primeiro!");
    }
}
    btn.addEventListener('click', addTask);


input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

list.addEventListener('click', function(e) {
   
    if (e.target.classList.contains('delete-btn')) {
        
        const liParaRemover = e.target.parentElement;
        
      
        liParaRemover.remove();
    }
});

    if (e.target.tagName === 'SPAN') {
        e.target.classList.toggle('done');
    }
    