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
    <div className="h-full">
        <PostAppBar id={id || ""} author={blog.author.name} />
        <div className="xl:grid xl:grid-cols-12 my-12 mx-12 h-full flex flex-col gap-10">
            <div className="col-span-8 w-full flex flex-col gap-7">
                <div className="text-4xl md:text-5xl xl:text-6xl font-semibold font-lora border-l border-t border-slate-300 pt-3 pl-3">{blog.title}</div>
                {blog.coverImage === "" ? null : <div className="mt-4 "><img className="rounded-lg w-full object-fill" src={blog.coverImage || ""} alt="" /></div>}
                <div className="text-xl lg:text-2xl whitespace-pre-wrap leading-tight font-lora border-l border-t border-slate-300 pt-3 pl-3">{blog.content}</div>
            </div>
            <div className="col-span-4 xl:ml-20 flex flex-col gap-5 w-fit">
                <div className="xl:border-b xl:border-slate-500 w-full pb-5">
                    <div className="flex gap-5">
                        <div className="flex border-4 p-1 border-black w-20 h-20 rounded-full text-2xl sm:text-3xl lg:text-5xl bg-black text-white font-bold justify-center items-center">{blog.author.name[0]}</div>
                        <div className="flex flex-col">
                            <div className="lg:text-xl text-lg">Author:</div>
                            <div className="lg:text-3xl text-2xl font-semibold font-lora">{blog.author.name || "Anonymous"}</div>
                        </div>
                    </div>
                </div>
                <div className="invisible xl:visible w-full flex gap-1 lg:items-start flex-col">
                    <div className="text-xl">Author profile:</div>
                    <div className="text-2xl font-light font-inter">{blog.author.profile ? blog.author.profile : `${blog.author.name.split(' ')[0]} is new to this platform. They are yet to update their About Me section.`}</div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
