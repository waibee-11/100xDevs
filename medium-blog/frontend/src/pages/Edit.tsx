import { useEffect, useState } from "react"
import Appbar from "../components/Appbar"
import Footer from "../components/Footer"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { useBlog, useProfile } from "../hooks";
import Loader from "../components/Loader";

interface Blog {
    "title": string,
    "content": string,
    "id": string,
    "coverImage": string,
    "author": {
        "name": string,
    }
}

export default function Edit() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [coverImage, setCoverImage] = useState("");

    const { userName, userEmail, userPassword, userId } = useProfile();

    const { loading, blog } : { loading: any, blog: any} = useBlog({
        id: id || ""
    });

    if (loading){
        return <div className="flex justify-center items-center h-screen">
            <Loader />
        </div>
    }

    async function handleSubmit(){
        try{
            const response = await axios.put(`${BACKEND_URL}/api/v1/blog`, {
                id: id,
                title: title === "" ? blog.title : title,
                content: content === "" ? blog.content : content,
                coverImage: coverImage === "" ? blog.coverImage : coverImage
            },{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
            alert("Blog was published successfully!");
            navigate('/blogs');
        } catch (e) {
            alert("Blog was not published. Try again.");
        }
    }

  return (
    <div>
        <Appbar userName={userName} />
        <div className="grid grid-cols-12">
            <div className="flex flex-col h-screen px-20 mt-20 gap-5 col-span-8">
                <textarea name="" id="" placeholder="Title" className="pl-3 text-6xl outline-none border-l border-slate-300 w-full resize-none h-10/12 py-3 font-semibold" rows={3} value={title == "" ? blog.title : title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="Link to cover image..." className="pl-3 text-xl outline-none border-l border-slate-300 w-full resize-none h-10/12 py-3 font-regular" onChange={(e) => setCoverImage(e.target.value)} />
                <textarea name="" id="" placeholder="Tell your story..." className="pl-3 text-2xl focus:none focus:ring-0 outline-none border-l border-slate-300 resize-none" rows={20} value={content == "" ? blog.content : content} onChange={(e) => setContent(e.target.value)}/>
            </div>
            <div className="col-span-4 mt-20 pl-10">
                <button className="bg-green-500 font-bold text-4xl px-5 py-3 rounded-full hover:bg-green-600" onClick={handleSubmit} >Publish</button>
            </div>
        </div>
        <Footer />
    </div>
  )
}
