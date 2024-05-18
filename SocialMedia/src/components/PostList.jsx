import React, { useContext } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/PostListStore'

const PostList = () => {
  const {postList} = useContext(PostListData);
  // console.log(postList)
  return (
    <>
    {postList.map((singlePost)=>(
      <Post key={singlePost.id} singlePost = {singlePost} />
    ))}
    </>
  )
}

export default PostList