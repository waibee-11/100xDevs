// function addTodo(){
//     alert("Adding todo");
//     const title = document.getElementById("title");
//     const desc = document.getElementById("desc");
//     const container = document.getElementById("container");
//     console.log(title);
//     console.log(desc);
//     container.innerHTML += `Added task:
//     Title: ${title.value}
//     Description: ${desc.value}`;
// }

// We are adding a string directly, which is pretty ugly
// So, we use the function document.createElement()

function addTodo(){
    const title = document.getElementById("title").value;
    const desc = document.getElementById("desc").value;
    const container = document.getElementById("container");

    const childDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const descDiv = document.createElement("div");
    const button = document.createElement("button");

    titleDiv.innerHTML = title;
    descDiv.innerHTML = desc;
    button.innerHTML = "Done!";
    childDiv.appendChild(titleDiv);
    childDiv.appendChild(descDiv);
    childDiv.appendChild(button);
    container.appendChild(childDiv);
}

// We now want to write a function that takes a state and
// renders the page based on it. This is the foundation for React.

// First let's create a function that creates a child when given
// a title, description and id
function createChild(title, desc, id){
    const childDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const descDiv = document.createElement("div");
    const button = document.createElement("button");

    titleDiv.innerHTML = title;
    descDiv.innerHTML = desc;
    button.innerHTML = "Done!";
    button.setAttribute("onclick", `markAsDone(${id})`)
    childDiv.appendChild(titleDiv);
    childDiv.appendChild(descDiv);
    childDiv.appendChild(button);
    return childDiv;
}

function updateDom(state){
    // state is an array of objects with title, desc and id
    const container = document.getElementById("container");
    for (let i = 0; i < state.length; i++){
        const newTodo = createChild(state[i].title, state[i].desc, state[i].id);
        container.appendChild(newTodo);
    }
}

updateDom([
    {
        title: "Go Cycling",
        desc: "At 5:30 pm",
        id: 1
    },
    {
        title: "Have dinner",
        desc: "From Broccoli Pasta",
        id: 2
    },
])

// - As seen above, every website can be represented as a state.
// - We now need that can accept this state and simple logic of
//   displaying it and does the rest of it by itself.
// - One such library is React.

// - The major issue is that the DOM refreshes even if nothing has
//   changed.
// - We need something that updates / refreshes only the elements 
//   that have changed and leave the other ones as it is.

// THE EASIEST WAY TO CREATE A DYNAMIC WEBSITE:
// - Update a state variable (done by FE Developer)
// - Delegate the task of figuring out difference between old
//   and new states to a hefty function (done by React)
// - Tell the hefty function how to add, update and delete
//   elements (done by FE Developer)