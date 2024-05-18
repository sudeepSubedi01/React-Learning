import React, { useContext, useRef } from 'react'
import {PostList as PostListData} from '../store/PostListStore'

const CreatePost = () => {

  const {addPost} = useContext(PostListData)

  const userID = useRef();
  const postTitle = useRef();
  const postContent = useRef();
  const postReactions = useRef();
  const postHashTags = useRef();

  const handleSubmit =()=>{
    event.preventDefault();
    const userIDData = userID.current.value
    const postTitleData = postTitle.current.value
    const postContentData = postContent.current.value
    const postReactionsData = postReactions.current.value
    const postHashTagsData = postHashTags.current.value.split(" ")
    userID.current.value = ''
    postTitle.current.value= ''
    postContent.current.value= ''
    postReactions.current.value= ''
    postHashTags.current.value= ''
    alert("data submitted")
    addPost(userIDData,postTitleData,postContentData,postReactionsData,postHashTagsData)
  }
  return (
    <>
      <form className="createPostContainer" >
        <div className="mb-3">
          <label htmlFor="userIDBox" className="form-label">User ID</label>
          <input type="text" className="form-control" id="userIDBox" placeholder="Enter your user id" ref={userID} />
        </div>
        <div className="mb-3">
          <label htmlFor="postTitleBox" className="form-label">Post title</label>
          <input type="text" className="form-control" id="postTitleBox" placeholder="How are you feeling today...." ref={postTitle}  />
        </div>
        <div className="mb-3">
          <label htmlFor="postContentBox" className="form-label">Post Content</label>
          <textarea className="form-control" id="postContentBox" rows="2" placeholder='Tell us more about it...' ref={postContent} ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="reactionNoBox" className="form-label">No of reactions</label>
          <input type="number" className="form-control" id="reactionNoBox" placeholder="No of people who reacted" ref={postReactions}  />
        </div>
        <div className="mb-3">
          <label htmlFor="hashTagBox" className="form-label">HashTags</label>
          <input type="text" className="form-control" id="hashTagBox" placeholder="Your hashTags here..." ref={postHashTags}  />
        </div>
        <div>
          <button type="button" className="btn btn-primary" onClick={()=>handleSubmit()}>Post</button>
        </div>
      </form>
    </>
  )
}

export default CreatePost