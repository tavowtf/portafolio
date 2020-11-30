//Selectors
const toDoInput = document.querySelector('.toDo_input');
const toDoButton = document.querySelector('.toDo_button');
const toDoList = document.querySelector('.toDo_list');
const filterOption = document.querySelector('.filter_todo');
//Event Listener

toDoButton.addEventListener('click', addTodo);
toDoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click',filterTodo);


//Functions

function addTodo(e){
    e.preventDefault();

    //ToDo DIV
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('toDo');
    
    // Crear li
    const newTodo = document.createElement('li');
    newTodo.innerText = toDoInput.value;
    newTodo.classList.add('toDo_item');
    toDoDiv.appendChild(newTodo);
    
    //Check mark button
    const completedButton = document.createElement('button')
    completedButton.innerHTML ='<i class="material-icons complete-icon">check_circle</i>';
    completedButton.classList.add('complete_btn', 'complete');
    toDoDiv.appendChild(completedButton);
    
    //trash mark button
    const trashButton = document.createElement('button')
    trashButton.innerHTML ='<i class="material-icons icon">cancel</i>';    
    trashButton.classList.add('trash_btn','trash');
    toDoDiv.appendChild(trashButton);

    //Append todo
    toDoList.appendChild(toDoDiv);
    
    //clear todo INPUT
    toDoInput.value = '';
}

//DELETE 

function deleteCheck(e){
    const item = e.target;
    //ANIMATION
    if(item.classList.contains('trash') ){
        const toDo = item.parentElement;
        toDo.classList.add('fall');
        toDo.addEventListener('transitionend', function(){
            toDo.remove ();
        });
    }
    //ANIMATION
    if(item.classList.contains('icon') ){
        const toDo = item.parentElement.parentElement;
        toDo.classList.add('fall');

        toDo.addEventListener('transitionend', function(){
            toDo.remove ();
        });
        

    }
    //CHECMARK
    if(item.classList.contains('complete')){
        const toDo = item.parentElement;
        toDo.classList.toggle('completada');
    }

    if(item.classList.contains('complete-icon')){
        const toDo = item.parentElement.parentElement;
        toDo.classList.toggle('completada');
    }
}

 function filterTodo(e){
    const todos = toDoList.childNodes;
    todos.forEach(function(toDo){
        switch(e.target.value){
            case 'todas':
                break;
            case 'completada':
                if(toDo.classList.contains('completada')){
                    toDo.style.display = 'flex';
                } else{
                    toDo.style.display = "none";
                }
        }
    })
 }