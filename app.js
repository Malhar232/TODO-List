function randquote(){
    var space=document.querySelector('#randomquote');
    var quotes=['"Push yourself, because no one else is going to do it for you."','"Sometimes later becomes never. Do it now."','"Great things never come from comfort zones."'
,'"Dream it. Wish it. Do it."'];
var number=Math.floor(Math.random()*4);
var displaynode=quotes[number];
space.textContent=displaynode;
uichange();

}


let buttonadd=document.querySelector("#sub-btn");
buttonadd.addEventListener('click',addtodo);

function addtodo(e){
    let THETODO=document.querySelector('#thetodo')
    let thelist=document.querySelector('#thelist');
    let newnode=document.createElement('li');

    let box=document.createElement('div');
        box.setAttribute('class','outer');
        box.style.backgroundColor='wheat';
    let content=document.createElement('p');
    let innerbox=document.createElement('div');
    innerbox.setAttribute('class','buttons');
    let donebut=document.createElement('button');
    donebut.classList.add('donebut');
    donebut.innerHTML='<a class="waves-effect waves-light btn-small green"><i class="material-icons">check</i></a>';
    let delbut=document.createElement('button');
    delbut.classList.add('delbut');
    delbut.innerHTML='<a class="waves-effect waves-light btn-small red"><i class="material-icons">close</i></a>';

    if(THETODO.value===""||THETODO.value===" "){
        alert("Enter the todo")
        box.classList.add('notvisible');
        box.addEventListener('animationend',()=>{
            box.remove();
        })
       
    }



    delbut.addEventListener('click',()=>{
        box.classList.add('pongya');
        
        box.addEventListener('animationend',()=>{
            box.remove();
        })
        
    })

    donebut.addEventListener('click',()=>{
        box.classList.add('scratch');
        content.classList.add('scratch');
    })

    savedata(THETODO.value);

    content.innerText=THETODO.value;
    thelist.appendChild(newnode);
    newnode.appendChild(box);
    box.appendChild(content);
    box.appendChild(innerbox);
    innerbox.appendChild(donebut);
    innerbox.appendChild(delbut);
   
    e.preventDefault();
    THETODO.value="";
}


function savedata(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function uichange(){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){

        let THETODO=document.querySelector('#thetodo')
        let thelist=document.querySelector('#thelist');
        let newnode=document.createElement('li');
    
        let box=document.createElement('div');
            box.setAttribute('class','outer');
            box.style.backgroundColor='wheat';
        let content=document.createElement('p');
        let innerbox=document.createElement('div');
        innerbox.setAttribute('class','buttons');
        let donebut=document.createElement('button');
        donebut.classList.add('donebut');
        donebut.innerHTML='<a class="waves-effect waves-light btn-small green"><i class="material-icons">check</i></a>';
        let delbut=document.createElement('button');
        delbut.classList.add('delbut');
        delbut.innerHTML='<a class="waves-effect waves-light btn-small red"><i class="material-icons">close</i></a>';

    
    
    
        delbut.addEventListener('click',()=>{
            removelocals(todo);

            box.classList.add('pongya');
            box.addEventListener('animationend',()=>{
                box.remove();
            })
            
        })
    
        donebut.addEventListener('click',()=>{
            box.classList.add('scratch');
            content.classList.add('scratch');
        })
    
        
    
        content.innerText=todo;
        thelist.appendChild(newnode);
        newnode.appendChild(box);
        box.appendChild(content);
        box.appendChild(innerbox);
        innerbox.appendChild(donebut);
        innerbox.appendChild(delbut);
       
        
    });
}
function removelocals(todo){
    let todos;
    let outer=document.querySelector(".outer");
    if(localStorage.getItem("todos")===null){
        todos=[];
    
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    const todoindex=outer.childNodes[0].innerText;
    todos.splice(todos.indexOf(todoindex),1);
    localStorage.setItem("todos",JSON.stringify(todos));
}