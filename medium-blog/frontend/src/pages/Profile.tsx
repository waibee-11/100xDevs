import { useState } from "react"
import Appbar from "../components/Appbar";
import { useProfile } from "../hooks";
import { Link } from "react-router-dom";

export default function Profile() {
    const [hidePassword, setHidePassword] = useState(true);
    const {userName, userEmail, userPassword, userImage, userProfile} = useProfile();
  return (
    <div className="">
        <Appbar userName={userName} />
        <div className="flex items-center gap-10 justify-center h-6/12">
            <div className="flex justify-center w-5/12">
                <div className="">{userImage ? <img className="object-cover rounded-3xl" src={userImage} alt="" /> : <ProfileImageText username={userName} />}</div>
            </div>
            <div className="flex flex-col gap-10 items-between justify-between mx-10">
                <div className="flex flex-col gap-5 items-center px-20 border-b border-slate-400 pb-10">
                    <div className="text-5xl font-extrabold">{userName}</div>
                    <div className="text-2xl font-regular">{userProfile}</div>
                </div>
                <div className="flex flex-col gap-5 items-center">
                    <div className="text-xl font-light">{userEmail}</div>
                    <div className="flex gap-5 border-2 px-5 py-2 rounded-3xl items-center">
                        <div className="text-xl pl-2">{hidePassword ? "•".repeat(10) : userPassword}</div>
                        <button className="bg-black text-white px-3 py-1 rounded-3xl" onClick={() => setHidePassword(!hidePassword)}>{hidePassword ? "Show password" : "Hide password"}</button>
                    </div>
                    <Link to={'/profile/update'} className="mt-4" >
                        <button className="bg-black text-2xl font-regular px-4 py-2 rounded-3xl text-white">Update profile</button>
                    </Link>
                </div>
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
