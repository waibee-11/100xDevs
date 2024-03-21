import { Link, useNavigate } from "react-router-dom";


export default function Appbar({ userName }: {userName: string}) {
  const navigate = useNavigate();

  function handleLogOut(){
    localStorage.removeItem("token");
    navigate('/signin');
  }

  return (
    <div className="flex md:flex-row flex-col gap-5 md:gap-0 px-10 xl:px-52 justify-between items-center mt-5">
      <Link to={'/blogs'} >
        <div className="w-1/12 text-3xl font-bold hover:text-slate-800 font-lora text-black">Medium</div>
        </Link>
        <div className="appbar-right flex items-center gap-5">
            <Link to={'/profile'} >
              <div className="rounded-lg py-1 px-3 bg-black text-white hover:bg-slate-800 font-inter">Hi, {userName ? userName.split(' ')[0] : "Anonymous"}!</div>
            </Link>
            <Link to={'/publish'} >
              <button className="rounded-lg py-1 px-3 bg-black text-white hover:bg-slate-800 font-inter">New post</button>
            </Link>
            <button className="bg-black border-2 rounded-lg text-white px-4 py-1 text-md hover:bg-slate-800 font-inter" onClick={handleLogOut}>Log out</button>
        </div>
    </div>
  )
}
