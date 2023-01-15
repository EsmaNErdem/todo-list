const form = document.querySelector('#new-todo');
const input = document.querySelector('#new-list');
const ul = document.querySelector('#list');

//adding new list
form.addEventListener('submit', function(e){
    e.preventDefault()
    const newList = document.createElement('li');
    newList.innerText = input.value;
    newList.classList.add('list-li');

    if (input.value === "") {
        alert("Please add some task!");
        return false;
    }

    const removeBtn = document.createElement('button')
    removeBtn.innerText = "X";
    newList.appendChild(removeBtn);
    ul.appendChild(newList);
    input.value = '';
    
//storing data into localstorage
    localStorage.setItem('items', ul.innerHTML);
    
})

//retrieving data from local storage
if(localStorage.getItem('items') !== ''){
       ul.innerHTML = localStorage.getItem('items');
    }

//removing list
ul.addEventListener('click', function(event){
    if(event.target.tagName === 'BUTTON'){
        event.target.parentElement.remove();
        localStorage.setItem('items', ul.innerHTML);

    } else {
        const newList = document.createElement('li');
        event.target.classList.toggle("line-cross");
        localStorage.setItem('items', ul.innerHTML);
    }
})

