import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src='https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_1280.jpg' alt=''></img>
        <div className='postInfo'>
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className='postTitle'>
                Lorem ipsum, dolor sit amet
            </span>
            <hr/>
            <span className='postDate'>1 hour ago</span>
        </div>
        <p className='postDesc'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat exercitationem, labore illum autem necessitatibus iure eveniet magni, officia consequatur adipisci similique nisi libero. Exercitationem atque consequatur saepe pariatur officiis accusantium.
        </p>
      
    </div>
  )
}