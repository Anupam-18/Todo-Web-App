// DOM Vars
const addBtn = document.querySelector(".rightHead");
const container = document.querySelector(".container");
const itemList = document.querySelector(".itemList");
const emptyList = document.querySelector(".emptyList");
const popUpItem = document.querySelector(".popUpItem");
const popUpItemList = document.querySelector(".popUpItemList");
const closeBtn = document.querySelector("#closeBtn");
const list = document.querySelector("#listVal");
const item = document.querySelector("#itemVal");

//initial dynamic style
popUpItem.style.display = 'none';
popUpItemList.style.display = 'none';


var insertionPlace;


// event on add button initially
addBtn.addEventListener("click", function () {
    if (popUpItem.style.display == 'none') {
        popUpItem.style.display = 'block';
    }
    container.classList.add("active");
});

// event on close button of pop up initially
closeBtn.addEventListener("click", function () {
    if (popUpItem.style.display == 'block') {
        popUpItem.style.display = 'none';
    }
    container.classList.remove("active");
    list.value = "";
});

// event on add button of popup item
document.addEventListener('click', function (e) {
    if (e.target && e.target.id == 'addBtn') {
        popUpItem.style.display = 'none';
        container.classList.remove("active");
        const listVal = list.value;
        list.value = "";
        if (listVal) {
            emptyList.style.display = "none";
        }
        const newListItem = document.createElement('div');
        newListItem.className = "listItem";
        newListItem.innerHTML = `
        <header>${listVal}</header> 
        <ul id="listContent">
        </ul>
        <i class="fas fa-plus-circle" id="addItemBtn"></i>
        <i class="far fa-trash-alt" id="closeItemBtn"></i>
        `
        itemList.appendChild(newListItem);
    }
});


// event on add button to list new item
document.addEventListener('click', function (e) {
    if (e.target && e.target.id == 'addItemBtn') {
        if (popUpItemList.style.display == 'none') {
            popUpItemList.style.display = 'block';
        }
        container.classList.add("active");
        insertionPlace = e.target.parentElement.childNodes[3];
    }
});

// event for adding new item in the list
document.addEventListener('click', function (e) {
    if (e.target && e.target.id == 'addItem') {

        popUpItemList.style.display = 'none';
        container.classList.remove("active");
        const itemVal = item.value;
        item.value = "";
        const li = document.createElement('li');
        li.className = "eachItem";
        const text = document.createTextNode(itemVal);
        li.appendChild(text);
        const a = document.createElement('a');
        a.id = "markDone";
        const linkText = document.createTextNode("mark done");
        a.appendChild(linkText);
        li.appendChild(a);
        insertionPlace.appendChild(li);
    }
});

// event for close button while adding new item in the list
document.addEventListener('click', function (e) {
    if (e.target && e.target.id == 'closeItem') {
        popUpItemList.style.display = 'none';
        container.classList.remove("active");
        item.value = "";
    }
});



// event for deleting the list
document.addEventListener('click', function (e) {
    if (e.target && e.target.id == 'closeItemBtn') {
        e.target.parentElement.remove();
        if (!itemList.getElementsByTagName("div").length) {
            emptyList.style.display = "block";
            console.log("xqaqd");
        }
    }
});


// event for marking the item
document.addEventListener('click', function (e) {
    if (e.target && e.target.id == 'markDone') {
        console.log(e.target.parentElement);
        const parent = e.target.parentElement;
        parent.classList.add("afterMark");
        e.target.remove();
    }
});
