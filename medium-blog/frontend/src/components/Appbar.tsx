import { Link, useNavigate } from "react-router-dom";


export default function Appbar({ userName }: {userName: string}) {
  const navigate = useNavigate();

  function handleLogOut(){
    localStorage.removeItem("token");
    navigate('/signin');
  }

  return (
    <div className="flex px-10 justify-between items-center mt-5">
        <a href="/blogs" className="w-1/12"><img src="/public/medium-logo.png" alt="" /></a>
        <div className="appbar-right flex items-center gap-5">
            <Link to={'/profile'} >
              <div className="font-regular text-lg">Hi, {userName ? userName.split(' ')[0] : "Anonymous"}!</div>
            </Link>
            <Link to={'/publish'} >
              <button className="bg-green-500 rounded-3xl py-1 px-3 hover:bg-green-400">Add new</button>
            </Link>
            <button className="bg-black border-2 rounded-3xl text-white px-4 py-1 text-md hover:bg-slate-700" onClick={handleLogOut}>Log out</button>
        </div>
    </div>
  )
}
