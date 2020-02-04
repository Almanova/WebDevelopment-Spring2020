var task = document.querySelector('.adding-task input');
var box = document.querySelector('ul');

let input = document.querySelector('.adding-task input');
pressEnter = function(event) {
    if (event.keyCode === 13) 
        document.querySelector('.adding-task button').click();
}
input.addEventListener("keyup", pressEnter);

function createItem() {
    let item = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("onclick", "checkItem(this)");
    let text = document.createElement('label');
    text.innerHTML = task.value;
    item.appendChild(checkbox);
    item.appendChild(text);
    let image = document.createElement('img');
    image.setAttribute("src", "https://cdn2.iconfinder.com/data/icons/ui-essentials-2/1250/trash-delete-can-garbage-app-android-phone-512.png");
    image.setAttribute("height", "25");
    image.setAttribute("onclick", "deleteItem(this)");
    item.appendChild(image);
    return item;
}

function addItem() {
    if (task.value != '') {
        item = createItem();
        box.appendChild(item);
        task.value = '';
    }
    else
        alert('Please enter the task first!');
}

function checkItem(item) {
    if (item.checked === true) 
        item.nextSibling.style.textDecoration = "line-through";
    else 
        item.nextSibling.style.textDecoration = "none";
}

function deleteItem(item) {
    item.parentElement.remove();
}