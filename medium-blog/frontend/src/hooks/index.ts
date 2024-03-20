import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";

interface Blog {
    "title": string,
    "content": string,
    "id": string,
    "coverImage": string,
    "postDate": Date,
    "author": {
        "name": string,
        "image": string,
        "profile": string,
    }
}

export const useBlog = ({id} : {id : string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((response) => {
            console.log("Hello");
            console.log(response.data.response);
            setBlog(response.data.response);
            setLoading(false);
        })
    }, [id])

    return {
        loading, blog
    };
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((response) => {
            setBlogs(response.data.response);
            setLoading(false);
        })
    }, [])

    return {
        loading, blogs
    };
}

export const useProfile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState("");
    const [image, setImage] = useState("");
    const [profile, setProfile] = useState("");

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/user/profile`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((response) => {
            setName(response.data.response.name);
            setEmail(response.data.response.email);
            setPassword(response.data.response.password);
            setId(response.data.response.id);
            setImage(response.data.response.image);
            setProfile(response.data.response.profile);
        })
    },[])

    return {
        userName: name,
        userEmail: email,
        userPassword: password,
        userId: id,
        userImage: image,
        userProfile: profile,
    };
}