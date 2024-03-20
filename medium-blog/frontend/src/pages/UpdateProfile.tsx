import { useState } from "react"
import Appbar from "../components/Appbar";
import { useProfile } from "../hooks";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UpdateProfile() {
    const navigate = useNavigate();
    const [hidePassword, setHidePassword] = useState(true);
    const [username, setUsername] = useState("");
    const [useremail, setUseremail] = useState("");
    const [userpassword, setUserpassword] = useState("");
    const [coverimage, setCoverimage] = useState("");
    const [userprofile, setUserprofile] = useState("");

    const {userName, userEmail, userPassword, userId, userImage, userProfile } = useProfile();

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
            console.log("SUCCESS!");
            navigate('/blogs');
        } catch (e) {
            alert("Profile was not updated. Try again.");
        }
    }


  return (
    <div className="">
        <Appbar userName={userName} />
        <div className="flex items-center mt-20 gap-20 justify-center">
            <textarea placeholder="Profile Image link" className="mt-10 resize-none border-b border-gray-200 text-center text-3xl font-semibold outline-none" value={coverimage == "" ? userImage : coverimage} onChange={(e) => setCoverimage(e.target.value)}></textarea>
            <div className="col-span-5 flex flex-col gap-20 items-center">
                <div className="flex flex-col gap-20">
                <textarea placeholder="Enter name" className="border-b border-gray-200 resize-none text-5xl font-extrabold text-center outline-none" value={username === "" ? userName : username} onChange={(e) => setUsername(e.target.value)}></textarea>
                <textarea placeholder="Write something about yourself..." className="border-b border-gray-200 resize-none text-2xl font-semibold text-center outline-none" value={userprofile === "" ? userProfile : userprofile} onChange={(e) => setUserprofile(e.target.value)}></textarea>
                </div>
                <textarea placeholder="Enter email" className="resize-none border-b border-gray-200 text-center text-3xl font-semibold outline-none" value={useremail === "" ? userEmail : useremail} onChange={(e) => setUseremail(e.target.value)}></textarea>
                <textarea placeholder="Enter password" className="resize-none border-b border-gray-200 text-center text-3xl font-semibold outline-none" value={userpassword === "" ? userPassword : userpassword} onChange={(e) => setUserpassword(e.target.value)}></textarea>
                <button className="bg-black text-2xl font-regular px-4 py-2 rounded-3xl text-white" onClick={handleSubmit}>Confirm</button>
            </div>
        </div>
    </div>
  )
}

function ProfileImageText({username}: {username: string}){
    return (
            <div className="text-center flex justify-center">
                <div className="w-2/12 bg-slate-800 text-white text-6xl p-7 rounded-full">{username[0] || "A"}</div>
            </div>
    )
}
