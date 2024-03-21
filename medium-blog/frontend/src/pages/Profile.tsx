import { useState } from "react"
import Appbar from "../components/Appbar";
import { useProfile } from "../hooks";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Profile() {
    const [hidePassword, setHidePassword] = useState(true);
    const {userName, userEmail, userPassword, userProfile} = useProfile();
  return (
    <div className="">
        <Appbar userName={userName} />
        <div className="flex flex-col xl:flex-row gap-10 xl:mx-10 mt-20 w-full items-center xl:items-start xl:justify-around h-full">
            <div className="flex flex-row gap-5 xl:gap-0 xl:flex-col xl:py-36 mx-5">
                <div className="flex justify-center text-6xl lg:text-8xl bg-black text-white w-28 h-28 lg:w-40 lg:h-40 items-center rounded-full mb-20 font-bold">{userName[0] || "A"}</div>
                <div className="flex flex-col">
                    <div className="pl-3 border-l border-gray-200 text-lg font-semibold">Name</div>
                    <div className="font-lora text-5xl font-regular outline-none pl-3 pt-5 pl-3 border-l border-b pb-3">{userName}</div>
                </div>
            </div>
            <div className="flex flex-col gap-10 px-5 xl:px-20 xl:py-36 pb-10 w-full xl:w-6/12">
                <div className="flex flex-col">
                    <div className="pl-3 border-l border-gray-200 text-lg font-semibold">About Me</div>
                    <div className="font-inter text-xl xl:text-2xl font-regular pl-3 border-l border-b pb-3 border-gray-200">{userProfile}</div>
                </div>
                <div className="flex flex-col">
                    <div className="pl-3 border-l border-gray-200 text-lg font-semibold">Email</div>
                    <div className="font-inter text-xl xl:text-2xl font-regular font-regular pl-3 border-l border-b pb-3 border-gray-200">{userEmail}</div>
                </div>
                <div className="flex flex-col">
                    <div className="pl-3 border-l border-gray-200 text-lg font-semibold">Password</div>
                    <div className="flex gap-5 border-l border-b pl-3 pb-3 items-center">
                        <div className="text-xl">{hidePassword ? "•".repeat(10) : userPassword}</div>
                        <button className="font-inter font-semibold px-3 py-1 rounded-3xl" onClick={() => setHidePassword(!hidePassword)}>{hidePassword ? "Show password" : "Hide password"}</button>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <Link to={'/profile/update'} className="mt-4" >
                        <button className="w-full bg-black text-2xl font-regular px-4 py-2 rounded-3xl text-white font-inter">Update profile</button>
                    </Link>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
