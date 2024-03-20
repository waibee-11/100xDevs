import { useState } from "react"
import Footer from "../components/Footer"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { useBlog } from "../hooks";
import Loader from "../components/Loader";
import EditAppBar from "../components/EditAppBar";

export default function Edit() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [coverImage, setCoverImage] = useState("");

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
            console.log(response);
            navigate('/blogs');
        } catch (e) {
            alert("ERROR! Try again.");
        }
    }

  return (
    <div>
        <EditAppBar />
        <div className="grid grid-cols-12">
            <div className="flex flex-col h-screen px-20 mt-20 gap-5 col-span-8">
                <textarea name="" id="" placeholder="Title" className="pl-3 pb-3 text-6xl outline-none border-l border-b border-slate-300 w-full resize-none h-10/12 py-3 font-bold font-lora" rows={3} value={title == "" ? blog.title : title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="Link to cover image..." className="pl-3 pb-3 text-xl outline-none border-l border-b border-slate-300 w-full resize-none h-10/12 py-3 font-regular font-inter" onChange={(e) => setCoverImage(e.target.value)} value={coverImage == "" ? blog.coverImage : coverImage} />
                <textarea name="" id="" placeholder="Tell your story..." className="pl-3 pb-3 text-2xl focus:none focus:ring-0 outline-none border-l border-b border-slate-300 resize-none whitespace-pre-wrap font-lora" rows={20} value={content == "" ? blog.content : content} onChange={(e) => setContent(e.target.value)}/>
            </div>
            <div className="col-span-4 mt-20 pl-10">
                <button className="font-inter bg-black text-white font-bold text-4xl px-5 py-3 rounded-lg hover:bg-green-500" onClick={handleSubmit} >Publish</button>
            </div>
        </div>
        <Footer />
    </div>
  )
}
