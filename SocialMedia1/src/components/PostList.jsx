import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/PostListStore'
import WelcomeMsg from './WelcomeMsg';
import LoadingScreen from './LoadingScreen';

const PostList = () => {
  const {postList, addPostAPI} = useContext(PostListData);
  const [fetching,setFetching] = useState(false)
  // console.log(postList)
  useEffect(()=>{
    const controller = new AbortController()
    const signal = controller.signal
    setFetching(true)
    // console.log('Data coming')
    fetch('https://dummyjson.com/posts', {signal})
    .then(res => res.json())
    .then((data)=>{ 
        // console.log(data)
        // console.log(data.posts)
        addPostAPI(data.posts)
        setFetching(false)      
      })

    //cleaning useEffect
    return () => {
      console.log('Cleaning up the useEffect hook')
      controller.abort()
    }
  },[])
  const handleGetPostsClick=()=>{}
  return (
    <>
    {
      fetching ? <LoadingScreen/> : null
    }

    { 
      !fetching ? (postList.length ===0 && <WelcomeMsg handleGetPostsClick={handleGetPostsClick} />) : null
    }
    {postList.map((singlePost)=>(
      <Post key={singlePost.id} singlePost = {singlePost} />
    ))}
    </>
  )
}

export default PostList