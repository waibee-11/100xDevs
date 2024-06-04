"use client"

import axios from "axios";
import { useState } from "react"

export default function SignUp(){
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
                <div className="p-4 border rounded">
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="name" className="p-2 m-2" />
                    <br />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" className="p-2 m-2" />
                    <br />
                    <div className="flex justify-center m-2">
                        <button onClick={() => {
                            axios.post("http://localhost:3000/api/user", {
                                userName,
                                password
                            });
                        }}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}