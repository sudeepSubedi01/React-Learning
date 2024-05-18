import { createContext, useReducer } from "react";

const DEFAULT_POST_LIST =[ 
{
  id:'1',
  title:'Going to USA',
  body:'hello USA is fun to roam',
  reactions: 0,
  userID: 'user-9',
  tags: ['vacation','fun']
},
{
  id:'2',
  title:'Going to srilanka',
  body:'hello srilanka is fun to roam',
  reactions: 10,
  userID: 'user-15',
  tags: ['roam','nature']
}]

//context variable (is an object)
export const PostList = createContext({
  postList:[],
  addPost: ()=>{},
  deletePost: ()=>{},
})

const reducerFun=(currentPostList , action)=>{
  let newPostList = currentPostList
  if(action.type === 'DELETE_POST'){
    newPostList = currentPostList.filter((tempPost)=> tempPost.id !== action.payload.deleteID )
  }
  if(action.type === 'ADD_POST'){
    newPostList = [{id:action.payload.userIDData , title:action.payload.postTitleData, body:action.payload.postContentData, reactions:action.payload.postReactionsData, tags: action.payload.postHashTagsData},...currentPostList]
  }
  console.log(newPostList)
  return newPostList
}

//component
const PostListProvider =({children}) =>{
  const [postList,dispatchPostList] = useReducer(reducerFun,DEFAULT_POST_LIST)

  const addPost =(userIDData,postTitleData,postContentData,postReactionsData,postHashTagsData) =>{
    dispatchPostList({type: 'ADD_POST', payload:{userIDData,postTitleData,postContentData,postReactionsData,postHashTagsData}})
  }
  const deletePost =(deleteID) =>{
    dispatchPostList({type: 'DELETE_POST', payload:{deleteID}})
  }

  return(
    <PostList.Provider value={{postList, addPost, deletePost}} >{children}</PostList.Provider>
  )
}
export default PostListProvider




//PostListProvider is a component
//accepts children from App.jsx i.e. the whole thing inside <PostList.Provider>...........</PostList.Provider>
//and returns the above statement