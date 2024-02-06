// So far, we have been using fetch() to hit http servers from the frontend.
// Today, we will see an external library called Axios, which makes sending http requests easier and cleaner.

// Let us look at fetch() syntax

function main(){
    fetch("https://sum-sever.100xdevs.com/todos")
    .then(async response => {
        const json = await response.json(); // since we are expecting data in json format
        console.log(json.todos.length);
    })
}

// Now let us look at Axios
// Install axios using "npm install axios" and include the line "const axios = require('axios')"

async function main(){
    const response = await axios.get("https://sum-sever.100xdevs.com/todos");
    console.log(response.data.todos.length); // you don't have to convert response to json
}

// Now let us see how to send method, body, and headers in fetch()

async function main(){
    const response = await fetch("https://sum-sever.100xdevs.com/todos", 
    {
        method: "POST",
        body: {
            username: "yash",
            password: "123"
        },
        headers: {
            "Authorization": "Bearer 123"
        }
    });
    const json = await response.json();
    console.log(json.todos.length);
}

// In Axios, you specify the method in the function call. For example, axios.get() or axios.post().

async function main(){
    const response = await axios.post("https://sum-sever.100xdevs.com/todos", {
        username: "yash",
        password: "123"
    },
    {
        headers: {
            Authorization: "Bearer 123"
        }
    });
    console.log(response.data.todos.length); // you don't have to convert response to json
}

// You can never send body in a get request. You can send data via headers or query params, but not via body

// A cleaner way to send axios requests is:

async function main(){
    const response = await axios(
        {
            url: "https://sum-sever.100xdevs.com/todos",
            method: "POST",
            headers: {
                Authorization: "Bearer 123"
            },
            data: {
                username: "yash",
                password: "123"
            }
        }
    );
    console.log(response.data.todos.length);
}

// That's it!