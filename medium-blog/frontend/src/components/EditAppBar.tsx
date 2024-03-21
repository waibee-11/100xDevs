import { Link, useNavigate } from "react-router-dom";
import { useProfile } from "../hooks";


export default function EditAppBar() {
    const navigate = useNavigate();

    function handleLogOut(){
      localStorage.removeItem("token");
      navigate('/signin');
    }

    const { userName } = useProfile();
  
    return (
      <div className="flex px-5 xl:px-52 justify-between items-center my-5 sm:gap-0 gap-5 sm:flex-row flex-col">
            <Link to={'/blogs'} >
                <div className="w-1/12 text-3xl text-black font-bold hover:text-slate-800 font-lora">Medium</div>
            </Link>
          <div className="appbar-right flex items-center gap-5">
                <Link to={'/profile'} >
                    <div className="rounded-lg py-1 px-3 bg-black text-white hover:bg-slate-800 font-inter text-center">Hi, {userName ? userName.split(' ')[0] : "Anonymous"}!</div>
                </Link>
                <button className="font-inter rounded-lg py-1 px-3 bg-black text-white hover:bg-green-600" onClick={() => navigate(-1)}>Go Back</button>
                <button className="font-inter bg-black border-2 rounded-lg text-white px-4 py-1 text-md hover:bg-slate-800" onClick={handleLogOut}>Log out</button>
          </div>
      </div>
    )
}
