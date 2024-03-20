import { SignUpInput } from "@waibee/medium-common-2";
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Auth({ type }: { type : "signin" | "signup" }) {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignUpInput>({
        name: "",
        email: "",
        password: "",
    });

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user${type === "signin" ? "/signin" : "/signup" }`, postInputs);
            const token = response.data.jwt;
            localStorage.setItem("token", token);
            navigate('/blogs');
        } catch (e){
            alert("Request failed. Try again.");
        }
    }

  return (
    <div className="flex justify-center h-screen flex-col items-center">
        <div className="flex justify-center flex-col items-center w-8/12">
            <div className="text-3xl font-extrabold">
                {type === "signin" ? "Sign in to your account" : "Create an account"}
            </div>
            <div className="mt-2 text-slate-500">{type === "signin" ? "Don't have an account? " : "Already have an account? "}
            <Link to={type=="signin" ? "/signup" : "/signin"} className="underline text-slate-500">{type=="signin" ? "Sign up" : "Sign in"}</Link></div>
            {type === "signup" ? <div className="w-full mt-5"><Input label="Name" placeholder="Yash Barve..." onChange={(e) => {
                setPostInputs(c => ({
                    ...c,
                    name: e.target.value
                }));
            }} /></div> : null}
            <div className="w-full mt-5"><Input label="Email" placeholder="waibee@yb.com..." onChange={(e) => {
                setPostInputs(c => ({
                    ...c,
                    email: e.target.value
                }));
            }} /></div>
            <div className="w-full mt-5"><Input type="password" label="Password" placeholder="Enter password..." onChange={(e) => {
                setPostInputs(c => ({
                    ...c,
                    password: e.target.value
                }));
            }} /></div>
            <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-8 w-full">{type === "signin" ? "Sign in" : "Sign up"}</button>
        </div>
    </div>
  )
}

interface labelledInputs{
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}
function Input({ label, placeholder, onChange, type }: labelledInputs){
    return (
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 text-black">{label}</label>
            <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5" placeholder={placeholder} required onChange={onChange} />
        </div>
    )
}
