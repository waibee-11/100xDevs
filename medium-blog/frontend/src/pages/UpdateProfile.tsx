import { useState } from "react"
import Appbar from "../components/Appbar";
import { useProfile } from "../hooks";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function UpdateProfile() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [useremail, setUseremail] = useState("");
    const [userpassword, setUserpassword] = useState("");
    const [coverimage] = useState("");
    const [userprofile, setUserprofile] = useState("");

    const {userName, userEmail, userPassword, userImage, userProfile } = useProfile();

    async function handleSubmit(){
        try{
            const response = await axios.put(`${BACKEND_URL}/api/v1/user/profile`, {
                name: username === "" ? userName : username,
                email: useremail === "" ? userEmail : useremail,
                password: userpassword === "" ? userPassword : userpassword,
                image: coverimage === "" ? userImage : coverimage,
                profile: userprofile === "" ? userProfile : userprofile,
            },{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
            console.log(response);
            navigate('/profile');
        } catch (e) {
            alert("ERROR! Try again.");
        }
    }


  return (
    <div className="">
        <Appbar userName={userName} />
        <div className="flex mt-10 justify-around h-screen mt-36">
            <div className="flex flex-col">
                <div className="flex justify-center text-8xl bg-black text-white w-40 h-40 items-center rounded-full mb-20 font-bold">{username === "" ? userName[0] : username[0] || "A"}</div>
                <div className="pl-3 border-l border-gray-200 text-lg font-semibold">Name</div>
                <textarea placeholder="Enter name" className="border-b border-l border-gray-200 resize-none text-5xl font-regular outline-none pl-3 pt-5 font-lora" value={username === "" ? userName : username} onChange={(e) => setUsername(e.target.value)} rows={2}></textarea>
            </div>
            <div className="flex flex-col gap-10 w-5/12">
                <div className="flex flex-col gap-10 pb-5">
                    <div className="flex flex-col">
                        <div className="pl-3 border-l border-gray-200 text-lg font-semibold">About Me</div>
                        <textarea placeholder="Write something about yourself..." className="border-b border-l border-gray-200 resize-none text-2xl font-regular outline-none pl-3 pt-5 pb-3 font-inter" value={userprofile === "" ? userProfile : userprofile} onChange={(e) => setUserprofile(e.target.value)} rows={7}></textarea>
                    </div>
                    
                </div>
                <div className="flex flex-col">
                    <div className="pl-3 border-l border-gray-200 text-lg font-semibold">Email</div>
                    <textarea placeholder="Enter email" className="resize-none border-b border-gray-200 text-2xl font-regular outline-none border-l pl-3 pt-5 font-inter" value={useremail === "" ? userEmail : useremail} onChange={(e) => setUseremail(e.target.value)} rows={2}></textarea>
                </div>
                <div className="flex flex-col">
                    <div className="pl-3 border-l border-gray-200 text-lg font-semibold">Password</div>
                    <textarea placeholder="Enter password" className="resize-none border-b border-gray-200 text-xl font-light outline-none border-l pl-3 pt-5 font-inter" value={userpassword === "" ? userPassword : userpassword} onChange={(e) => setUserpassword(e.target.value)}></textarea>
                </div>
                <button className="bg-black text-2xl font-regular px-4 py-2 rounded-3xl text-white font-inter hover:bg-slate-800" onClick={handleSubmit}>Confirm</button>
            </div>
        </div>
        <Footer />
    </div>
  )
}


