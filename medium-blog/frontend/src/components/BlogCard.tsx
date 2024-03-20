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
};

export function BlogCard({name, title, content, date, id, coverImage, profileImage} : BlogCardInput) {
  return (
    <Link to={`/blog/${id}`} className="flex justify-between w-full gap-5 border-b border-gray-300 py-5" >
            <div className="flex flex-col w-6/12">
                <Avatar name={name} date={date || ""} image={profileImage} />
                <div className=" font-extrabold text-2xl mt-1 hover:text-gray-700 cursor-pointer">{title}</div>
                <div className="text-lg mt-3">{content.substring(0,200) + (content.length >= 200 ? "..." : "")}</div>
                <div className="font-light text-sm mt-2 text-slate-500">{Math.ceil(content.length / 1500)} {content.length <= 1500 ? "minute" : "minutes"} read</div>
            </div>
            <div className="w-5/12">
                <img className="object-cover" src={coverImage || ""} alt="" />
            </div>
    </Link>
  )
}
