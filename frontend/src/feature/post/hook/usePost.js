import { createPost, getFeed } from "../services/post.api";
import { useContext } from "react";
import { useEffect } from "react";
import { postContext } from '../Post.context'


export const usePost = () => {
    const context = useContext(postContext)

    const { loading, setloading, post, setpost, feed, setfeed } = context

    const handleGetFeed = async () => {
        setloading(true)
        const data = await getFeed()
        setfeed(data.posts)
        setloading(false)
    }



    const handleCreatePost = async(imageFile,caption)=>{
        setloading(true)
        const data = await createPost(imageFile,caption)
        setfeed([data.post, ...feed])
        setloading(false)

        
    }
    useEffect(()=>{
        handleGetFeed()
    },[])
    return {loading, feed, post, handleGetFeed,handleCreatePost}

}