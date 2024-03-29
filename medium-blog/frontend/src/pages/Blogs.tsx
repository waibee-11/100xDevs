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

    console.log(blogs);

  return (
    <div className="h-full">
        <Appbar userName={userName} />
        <div className="grid grid-cols-12 h-full">
            <div className="xl:col-span-1"></div>
            <div className="xl:mx-0 mx-5 col-span-12 xl:col-span-10 flex flex-col py-10 h-full justify-start flex-wrap">
            {blogs.reverse().map((blog) => <BlogCard name={blog.author.name || "Anonymous"} title={blog.title} content={blog.content} id={blog.id} coverImage={blog.coverImage} profileImage={blog.author.image} postDate={blog.postDate} />
            )}
            </div>
            <div className="xl:col-span-1"></div>
        </div>
        <Footer />
    </div>
  )
}
