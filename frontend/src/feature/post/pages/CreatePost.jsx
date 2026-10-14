import React, { useRef, useState } from 'react'
import '../style/Createpost.scss'
import { usePost } from '../hook/usePost'
import { useNavigate } from 'react-router'

const CreatePost = () => {

    const [caption, setcaption] = useState("")
    const postImageInputFieldRef = useRef(null)

    const navigate = useNavigate()

    const {loading,handleCreatePost} = usePost()

    async function handleSubmit(e) {
        e.preventDefault()

        const file = postImageInputFieldRef.current.files[0]

        await handleCreatePost(file,caption)

        navigate('/')
    }

    if(loading){
        return (
            <main>
                <h1>creating post.....</h1>
            </main>
        )
    }

  return (
    <main>
        <div className="create-post-page">
            <div className="form-container">
                <h1>Create Post</h1>
                <form onSubmit={handleSubmit}>
                    <label className='post-image-label' htmlFor="postImage">Select Image</label>
                    <input ref={postImageInputFieldRef} type="file" hidden name="postImage" id="postImage" />
                    <input value={caption} onChange={(e)=>{setcaption(e.target.value)}} type="text" name='caption' id='caption' placeholder='Enter Caption'/>
                    <button className='button primary-button'>Create Post</button>

                </form>
            </div>
        </div>
    </main>
  )
}

export default CreatePost