import { Link, useNavigate } from "react-router-dom";
import { useProfile } from "../hooks";
import axios from "axios";
import { BACKEND_URL } from "../config";


export default function PostAppBar({id, author} : {id: string, author: string}) {
    const navigate = useNavigate();

    function handleLogOut(){
      localStorage.removeItem("token");
      navigate('/signin');
    }

    const { userName } = useProfile();

    async function handleDelete(){
        try{
            const response = await axios.delete(`${BACKEND_URL}/api/v1/blog/${id}`,{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
            console.log(response);
            navigate('/blogs');
        } catch(e) {
            alert("Blog was not deleted. Try again.")
        }
    };
  
    return (
      <div className="flex px-52 justify-between items-center my-5">
          <a href="/blogs" className="w-1/12 text-3xl text-black font-bold hover:text-slate-800 font-lora">Medium</a>
          <div className="appbar-right flex items-center gap-5">
            <Link to={'/profile'} >
                <div className="rounded-lg py-1 px-3 bg-black text-white hover:bg-slate-800 font-inter">Hi, {userName ? userName.split(' ')[0] : "Anonymous"}!</div>
            </Link>
              {userName === author ? <Link to={`/edit/${id}`} >
                <button className="rounded-lg py-1 px-3 bg-black text-white hover:bg-green-600 font-inter">Edit post</button>
              </Link> : null}
              {userName === author ? <button className="font-inter rounded-lg py-1 px-3 bg-black text-white hover:bg-red-600" onClick={handleDelete}>Delete post</button> : null}
              <button className="font-inter bg-black border-2 rounded-lg text-white px-4 py-1 text-md hover:bg-slate-800" onClick={handleLogOut}>Log out</button>
          </div>
      </div>
    )
}
