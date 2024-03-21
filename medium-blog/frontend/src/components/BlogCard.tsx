import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"

interface BlogCardInput{
    name: string,
    title: string,
    content: string,
    date?: string,
    id: string,
    coverImage?: string,
    profileImage?: string,
    postDate: Date,
};

export function BlogCard({name, title, content, id, coverImage, postDate} : BlogCardInput) {
  return (
    <Link to={`/blog/${id}`} className="border-l border-t border-slate-300 pt-3 pl-3 flex items-center xl:justify-between w-full gap-5 border-gray-300 py-5 xl:flex-row flex-col mb-5" >
            <div className="flex flex-col xl:w-6/12 w-full">
                <Avatar name={name} date={postDate} />
                <div className=" font-extrabold text-2xl mt-1 hover:text-gray-700 cursor-pointer font-lora">{title}</div>
                <div className="text-lg mt-3 whitespace-pre-wrap leading-tight font-inter">{content.substring(0,200) + (content.length >= 200 ? "..." : "")}</div>
                <div className="font-light text-sm mt-2 text-slate-500">{Math.ceil(content.length / 1500)} {content.length <= 1500 ? "minute" : "minutes"} read</div>
            </div>
            <div className="w-full xl:w-5/12 ">
                {coverImage ? <img className="rounded-lg w-full h-full object-fill" src={coverImage} alt="" /> : 
                <div className="rounded-lg w-full h-full bg-black text-white flex justify-center items-center text-7xl font-bold">{name[0] || "A"}</div>}
            </div>
    </Link>
  )
}
