const button = document.querySelector('#check')
/*const buttondelete = document.querySelector('.button2')*/


const textInput = document.querySelector('.task-type')
textInput.addEventListener('keydown', (e)=>{
    if(e.keyCode === 13){
        addul(e);
    }
});


const list = document.querySelector('.list-task');
list.addEventListener('click', (e) =>{
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
/*    if(document.querySelector('.task-type').style.textDecoration == 'line-through'){
        document.querySelector('.task-type').style.textDecoration = 'none';
        document.querySelector('.task-type').style.color = 'black';
    }
    else{
        document.querySelector('.task-type').style.textDecoration = 'line-through';
        document.querySelector('.task-type').style.color = '#666';
    }
*/
/*Because of how querySelector works, we need to add \\3*/
   /*
    console.log('este es el que tenemos');
    console.log(dateid);
    var number = dateid.substring(0,1);

    var res = dateid.substring(1);

    const string = '#\\3'+number+' ' +res;
    console.log(string);
    */

    /*aqui está el problema, busca el primero con .tasked, no el de los dos parametros*/
    const selectedText = document.querySelector(`.a${dateid}`);
    console.log(selectedText);
    selectedText.style.textDecoration = 'line-through';
    selectedText.style.color = 'rgba(68, 68, 68, 0.692)';
/*
    selectedText.style.textDecoration = 'line-through';
*/
}



function unfinishedTask(e,dateid){
    /*
    var number = dateid.substring(0,1);
    var res = dateid.substring(1);

    const string = '#\\3'+number+' ' +res;
    console.log(string);
    */
    const selectedText = document.querySelector(`.a${dateid}`);
    console.log(selectedText);
    selectedText.style.textDecoration = 'none';
    selectedText.style.color = 'black';
}

/*
function add(e){
    const total = document.querySelector('#total');
    const task = document.createElement('div');
    task.innerHTML = '<div class="container">' +
    '<div class="task">' +
        '<label class="containertask button1">' +
            '<input type="checkbox"  title="Task completed.">' +
            '<span class="checkmark" id="check" title="Task completed."></span>' +
        '</label>' +
        '<div>' +
        '<input type="text" class="task-type" name="FirstTask" placeholder="Write here your task...">' +
        '</div>' +
        '<div >' +
            '<input type="button" class="button2  buttonani" title="Delete task" value="✕">' +
        '</div>' +
    '</div>' +
'</div>';
    total.append(task);

}
*/

function remove(e, dateid){
    console.log(dateid);
    const selectedDiv = document.querySelector(`.c${dateid}`);
    selectedDiv.remove();
}


function addul(e){
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


//Fix the delete button
//input.addEventListener("keyup", function)
//if(event.keyCode === 13)


/*
button.addEventListener('click', (e) => {
    if(document.querySelector('.task-type').style.textDecoration == 'line-through'){
        document.querySelector('.task-type').style.textDecoration = 'none';
        document.querySelector('.task-type').style.color = 'black';
    }
    else{
        document.querySelector('.task-type').style.textDecoration = 'line-through';
        document.querySelector('.task-type').style.color = '#666';
    }
})
*/