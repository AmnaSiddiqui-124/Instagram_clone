import "../style/feed.scss"


const Feed = () => {
    return (
        <main className='feed-page'>
            <div className="feed">
                <div className="posts">
                    <div className="post">
                        <div className="user">
                            <div className="img-wrapper">
                                <img src="https://images.unsplash.com/photo-1768247695726-022586dea3a1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />

                            </div>
                            <p>UserName</p>
                        </div>
                        
                        <img src="https://images.unsplash.com/photo-1649626852799-b5229ee6cb35?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
                        
                        <div className="icon">

                            <div className="left">
                                <button><i class="ri-heart-3-line"></i></button>
                                <button><i class="ri-chat-3-line"></i></button>
                                <button><i class="ri-chat-3-line"></i></button>
                            </div>
                            <div className="right">
                                <button><i class="ri-bookmark-fill"></i></button>
                            </div>
                        </div>
                        <div className="bottom">
                            <p className="caption">caption caption</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Feed