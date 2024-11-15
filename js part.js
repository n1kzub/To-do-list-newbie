document.addEventListener('DOMContentLoaded', function () {
    initializeExistingItems();
});

function initializeExistingItems() {
    const preExistingItems = document.querySelectorAll('#todoList li');
    preExistingItems.forEach(addDeleteAndCheckbox); 
}

function addDeleteAndCheckbox(item) {
    const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x'; 
        deleteButton.classList.add('delete-btn'); 
        deleteButton.addEventListener('click', function () {
            item.remove();
        });
        item.appendChild(deleteButton); // adds a delete button to all the items

        const checkboxes = document.querySelectorAll('.todo-checkbox');
        checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
              this.parentElement.classList.add('complete');
            } else {
              this.parentElement.classList.remove('complete');
            };
        });
        });// add a 'Check' button for every item and checks it on click 
} 

var close = document.querySelectorAll('.close').forEach(button => {
    button.onclick = function () {
        this.parentElement.style.display = "none";
    }
}); // handles the close button

document.getElementById('todoInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
    }); // pressing Enter to enter the new item

function addItem() {
const input = document.getElementById('todoInput');
const itemText = input.value.trim(); // gets value from input

if (itemText) {
    const li = document.createElement('li'); //each value becomes list element

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('todo-checkbox');
    contentDiv.appendChild(checkbox); // creates checkbox for each item added

    const text = document.createTextNode(itemText);
    contentDiv.appendChild(text); // creates and appends task text
    
    li.appendChild(contentDiv);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x'; 
    deleteButton.classList.add('delete-btn'); 
    li.appendChild(deleteButton); // creates delete button for each item added

    const list = document.getElementById('todoList');
    list.appendChild(li); // appends the new item to the list

    input.value = ''; // clears input 

    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
    }); // event listener for delete button

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            li.classList.add('complete');
        } else {
            li.classList.remove('complete');
        }
    }); // event listener for checkbox to toggle completed style

  } else {
      console.log("Please enter task");
  }
} //adding the option of adding items to the list 
    
