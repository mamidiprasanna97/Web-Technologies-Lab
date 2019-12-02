function run() {
    let btn = document.querySelector('#add-tasks');
    btn.addEventListener('click', addNewToDo);
    loadToDos();
}
function addItem(item) {
    const db = window.localStorage;
    const list = document.querySelector('#task-list');
    const node = document.createRange().createContextualFragment(db.getItem(item));
    list.appendChild(node);
}

function loadToDos() {
    const db = window.localStorage;
    Object.keys(db).forEach(addItem);
}
function checkBoxUpdate(cb) {
    if (cb.checked) {
        cb.setAttribute('checked', cb.checked);
    } else {
        cb.removeAttribute('checked');
    }
    const itemString = new XMLSerializer().serializeToString(cb.parentNode);
    const id = cb.id;
    window.localStorage.setItem(id, itemString);
}


function addNewToDo(event) {
    event.preventDefault();

    const todo = document.querySelector('#todo-tasks');
    const value = todo.value.trim();

    if (value.length > 0) {
        const hash = (Date.now().toString(36).substr(2, 4) + performance.now().toString(36).replace('.','').substr(0, 4) + Math.random().toString(36).substr(3, 4)).toUpperCase();

        const identifier = `select-task-${hash}`;
        const temp = document.querySelector('#todo-task');
        const item = document.importNode(temp.content, true);
        const label = item.querySelector('label[for]');
        const input = item.querySelector('#select-task')
        const list = document.querySelector('#task-list');

        input.setAttribute('id', identifier);
        label.setAttribute('for', identifier);
        label.textContent = value;
        const db = window.localStorage;
        const itemString = new XMLSerializer().serializeToString(item);
        db.setItem(identifier, itemString);
        list.appendChild(item);
    }
    todo.value = '';
}
function deleteListItems(elem){
    elem.parentElement.classList.toggle('listDelete');
    elem.parentElement.addEventListener('animationend',listenerFunc);    
}

function listenerFunc(_event){
    const key= this.querySelector("input[type=checkbox]").id;
    const dataObj = window.localStorage;
    dataObj.removeItem(key);
    const parent = this.parentElement;
    parent.removeChild(this);
    
}
run();