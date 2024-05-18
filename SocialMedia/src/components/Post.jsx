import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { PostList as PostListData } from '../store/PostListStore';

const Post = ({ singlePost }) => {
  const { deletePost } = useContext(PostListData)
  return (
    <>
      <div className="card postCard" style={{ width: '30rem' }}>
        <div className="card-body">
          <h5 className="card-title">{singlePost.title}</h5>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cursor" style={{ cursor: 'pointer' }} onClick={() => deletePost(singlePost.id)}> <MdDelete /> </span>

          <p className="card-text">{singlePost.body}</p>
          {(singlePost.tags).map((singleTag) => (
            <span key={singleTag} className="badge text-bg-primary hashtag">{singleTag}</span>
          ))}
          <span className="position-absolute bottom-0 start-100 translate-middle badge rounded-pill bg-success"><AiFillLike /> {singlePost.reactions} </span>
        </div>
      </div>
    </>
  )
}

export default Post