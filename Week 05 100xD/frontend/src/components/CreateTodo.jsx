import React from 'react'
import { useState } from 'react'

export default function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  return (
    <div>
        <input 
        type="text" 
        placeholder='title' 
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <input 
        type="text" 
        placeholder='description' 
        id="desc"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={ ()=>{
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("Todo Added");
            })
        }}>Add Todo</button>
    </div>
  )
}