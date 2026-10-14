import "../style/feed.scss"
import Post from "../Components/Posts"
import { usePost } from "../hook/usePost"
import { useEffect } from "react"
import Navber from "../../shared/components/Navber"


const Feed = () => {
    const {feed , handleGetFeed,loading} = usePost()

    useEffect(()=>{
        handleGetFeed()
    },[])

    if(loading || !feed){
        return (<main><h1>Feed is loading...</h1></main>)
    }

    return (
    
        <main className='feed-page'>
            <Navber/>
            <div className="feed">
                <div className="posts">
                    {feed.map(post=>{
                        return<Post user={post.user} post={post}/>
                    })}
                   
                </div>
            </div>
        </main>

    )
}

export default Feed