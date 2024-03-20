import Appbar from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useBlogs, useProfile } from "../hooks";

export function Blogs() {
    const { loading, blogs } = useBlogs();
    const { userName } = useProfile();
    if (loading){
        return (
            <div className="flex justify-center items-center h-screen">
                <Loader />
            </div>
        )
    }

  return (
    <div className="h-screen">
        <Appbar userName={userName} />
        <div className="grid grid-cols-12 h-full">
            <div className="col-span-2"></div>
            <div className="col-span-8 flex flex-col py-10 h-full justify-start">
            {blogs.reverse().map((blog) => <BlogCard name={blog.author.name || "Anonymous"} title={blog.title} content={blog.content} id={blog.id} coverImage={blog.coverImage} profileImage={blog.author.image} />
            )}
            </div>
            <div className="col-span-2"></div>
        </div>
        <Footer />
    </div>
  )
}
