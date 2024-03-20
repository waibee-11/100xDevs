import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import { useBlog } from "../hooks"
import PostAppBar from "../components/PostAppBar"
import Loader from "../components/Loader"

interface Blog {
    "title": string,
    "content": string,
    "id": string,
    "author": {
        "name": string,
        "image": string,
        "profile": string,
    }
}

export function Blog() {
    const { id }  = useParams();
    const { loading, blog } : { loading: boolean, blog: any} = useBlog({
        id: id || ""
    });

    if (loading){
        return <div className="flex justify-center items-center h-screen">
            <Loader />
        </div>
    }

    console.log(blog);

  return (
    <div>
        <PostAppBar id={id || ""} author={blog.author.name} />
        <div className="grid grid-cols-12 my-12 mx-12 h-full">
            <div className="col-span-8 w-full flex flex-col gap-7">
                <div className="text-6xl font-semibold">{blog.title}</div>
                {blog.coverImage === "" ? null : <div className="mt-4"><img className="object-cover" src={blog.coverImage || ""} alt="" /></div>}
                <div className="text-2xl">{blog.content}</div>
            </div>
            <div className="col-span-4 ml-20 flex flex-col gap-10">
                <div className="border-b border-slate-500 w-full pb-10">
                    <div className="flex items-center gap-5">
                        {blog.author.image ? <img className="border-4 p-1 border-black w-20 h-20 rounded-full" src={blog.author.image} alt="Rounded avatar" /> : <div className="flex border-4 p-1 border-black w-20 h-20 rounded-full text-5xl bg-black text-white font-bold justify-center items-center">{blog.author.name[0]}</div>}
                        <div className="flex flex-col">
                            <div className="text-xl">Author:</div>
                            <div className="text-3xl font-semibold">{blog.author.name || "Anonymous"}</div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="text-xl">Author profile:</div>
                    <div className="text-2xl font-light">{blog.author.profile ? blog.author.profile : `${blog.author.name.split(' ')[0]} is new to this platform. They are yet to update their About Me section.`}</div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
