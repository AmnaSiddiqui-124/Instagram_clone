
const Post = ({ user, post, loading, handleLike, handleUnLike }) => {

    if (!user || !post) {
        return null;
    }

    return (
        <div className="post">
            <div className="user">
                <div className="img-wrapper">
                    <img
                        src={user.profileImage}
                        alt={user.username || "User"}
                    />
                </div>

                <p>{user.username}</p>
            </div>

            <img src={post.imgUrl} alt="Post" />

            <div className="icon">
                <div className="left">
                    <button type="button" aria-label="Like post">
                        <svg 
                        className={post.isLiked?"like":""}
                        aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none">
                            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
                        </svg>
                    </button>

                    <button type="button" aria-label="Comment on post">
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none">
                            <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
                        </svg>
                    </button>

                    <button type="button" aria-label="Share post">
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none">
                            <path d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13" />
                        </svg>
                    </button>
                </div>

                <div className="right">
                    <button type="button" aria-label="Save post">
                        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none">
                            <path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4V4.5Z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="bottom">
                <p className="caption">{post.caption}</p>
            </div>
        </div>
    );
};

export default Post;
