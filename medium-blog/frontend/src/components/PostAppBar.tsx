import { Link, useNavigate } from "react-router-dom";
import { useProfile } from "../hooks";


export default function PostAppBar({id, author} : {id: string, author: string}) {
    const navigate = useNavigate();

    function handleLogOut(){
      localStorage.removeItem("token");
      navigate('/signin');
    }

    const { userName } = useProfile();

    async function handleDelete(){
        try{
            alert("Blog deleted successfully.");
            navigate('/blogs');
        } catch(e) {
            alert("Blog was not deleted. Try again.")
        }

    }
  
    return (
      <div className="flex px-10 justify-between items-center my-5">
          <a href="/blogs" className="w-1/12"><img src="/public/medium-logo.png" alt="" /></a>
          <div className="appbar-right flex items-center gap-5">
            <Link to={'/profile'} >
                <div className="">Hi, {userName ? userName.split(' ')[0] : "Anonymous"}!</div>
            </Link>
              {userName === author ? <Link to={`/edit/${id}`} >
                <button className="bg-green-500 rounded-3xl py-1 px-3 hover:bg-green-400">Edit post</button>
              </Link> : null}
              {userName === author ? <button className="bg-red-500 text-white rounded-3xl py-1 px-3 hover:bg-red-400" onClick={handleDelete}>Delete post</button> : null}
              <button className="bg-black border-2 rounded-3xl text-white px-4 py-1 text-md hover:bg-slate-700" onClick={handleLogOut}>Log out</button>
          </div>
      </div>
    )
}
