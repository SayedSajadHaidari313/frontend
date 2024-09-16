import React from 'react'
import { useParams } from 'react-router-dom'

function PostDetail() {
      const {post_id} = useParams()
      console.log(post_id);
      
  // const post = posts.find((post) => post.id === id)
  // const {title, body} = post
  return (
    <div>PostDetail</div>
  )
}

export default PostDetail