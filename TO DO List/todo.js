let todoList = [];
 const makeToDo = function(){
   const todoTextElement = document.querySelector('.todo-text-input');
   const todoDateElement = document.querySelector('.todo-date-input');
   let name = todoTextElement.value;
   let date = todoDateElement.value;
   
   let todoItem = { name, date}
   todoList.push(todoItem);
   console.log(todoList)
   showToDo();
 }

 const showToDo = function(){
    const showTodoElement = document.querySelector('.to-do-container');
    let showHTML = ``;
    for(i = 0; i<todoList.length; i++){
        let {name, date} = todoList[i];
        showHTMLItem = `
        <div class="show-list-row-item">${name}
        </div>
        <div class="show-list-row-item">${date}
        </div>
        <button class="delete-btn" onclick="todoList.splice(${i},1); showToDo();">Delete</button>
        `;
        showHTML += showHTMLItem;
    }
    showTodoElement.innerHTML = showHTML;
 }