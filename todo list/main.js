const button = document.querySelector('#check')
const textInput = document.querySelector('.task-type')
textInput.addEventListener('keydown', (e)=>{
    /*We listen for the enter (keycode 13)*/
    if(e.keyCode === 13){
        addul(e);
    }
});

const list = document.querySelector('.list-task');
list.addEventListener('click', (e) =>{
    /*Find the id of the object we pressed.*/
    const dated = event.target.id;
    if(event.target.type == "button"){
        console.log
        remove(e, dated);
    }
    else if(event.target.checked == true){
            finishedTask(e, dated);
        }       
    else if(event.target.checked == false){
            unfinishedTask(e,dated);
        }
})



function finishedTask(e, dateid){
/*Find the box with the same ID (date) and modify it.*/
    const selectedText = document.querySelector(`.a${dateid}`);
    console.log(selectedText);
    selectedText.style.textDecoration = 'line-through';
    selectedText.style.color = 'rgba(68, 68, 68, 0.692)';
}



function unfinishedTask(e,dateid){
 
    const selectedText = document.querySelector(`.a${dateid}`);
    console.log(selectedText);
    selectedText.style.textDecoration = 'none';
    selectedText.style.color = 'black';
}


function remove(e, dateid){
    console.log(dateid);
    const selectedDiv = document.querySelector(`.c${dateid}`);
    selectedDiv.remove();
}


function addul(e){
    /*If we press enter while writing a task it will add it on the UL.*/
    const ul = document.querySelector('.list-task');
    const task = document.createElement('li');
    let taskText = document.querySelector('.task-type').value;
    let date = Date.now()
    if(taskText == ''){
        alert('Please, write a task.');
    }
    else{
    task.innerHTML = `<div class="container c${date}">` +
    `<div class="task">` +
    `<label class="containertask button1">` +
    `<input type="checkbox"  id="${date}" title="Task completed.">` +
    `<span class="checkmark" id="${date}" title="Task completed."></span>` +
    `</label>` +
    `<div class="tasked a${date}">` +
    `${taskText}` +
    `</div>` +
    `<div >` +
    `<input type="button" class="button2  buttonani" id="${date}" title="Delete task" value="✕">` +
    `</div>` +
    `</div>` +
    `</div>`;
    document.querySelector('.task-type').value = '';
    ul.appendChild(task);
}
}

