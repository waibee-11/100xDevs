import { useState } from "react"
import Appbar from "../components/Appbar"
import Footer from "../components/Footer"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { useProfile } from "../hooks";

export default function Publish() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const {userName} = useProfile();

    async function handleSubmit(){
        if (title == "" || content == ""){
            alert("Your post must have a title and a content");
            return;
        }
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title: title,
                content: content,
                coverImage: coverImage,
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
        <Appbar userName={userName} />
        <div className="xl:grid xl:grid-cols-12 flex flex-col">
            <div className="flex flex-col h-full px-5 xl:px-20 mt-20 gap-5 col-span-8">
                <textarea name="" id="" placeholder="Title" className="pl-3 pb-3 text-4xl md:text-6xl outline-none border-l border-b border-slate-300 w-full resize-none h-10/12 py-3 font-bold font-lora" rows={3} value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="Link to cover image..." className="pl-3 pb-3 text-sm md:text-xl outline-none border-l border-b border-slate-300 w-full resize-none h-10/12 py-3 font-regular font-inter" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} />
                <textarea name="" id="" placeholder="Tell your story..." className="pl-3 pb-3 text-lg md:text-2xl focus:none focus:ring-0 outline-none border-l border-b border-slate-300 resize-none whitespace-pre-wrap font-lora" rows={20} value={content} onChange={(e) => setContent(e.target.value)}/>
            </div>
            <div className="col-span-4 xl:mt-20 xl:pl-10 xl:pr-52 px-5 mt-10">
                <button className="bg-black font-semibold text-2xl xl:text-4xl text-white w-full px-5 py-3 rounded-lg hover:bg-green-500 font-inter" onClick={handleSubmit} >Publish post</button>
            </div>
        </div>
        <Footer />
    </div>
  )
}
