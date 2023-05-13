import React from 'react'
import Post from './Post'

function Home() {
  return (
    <div className="mid">
      <div className='mid-left'>
        <Post catagory="sample" />
        <Post catagory="html" />
        <Post catagory="css" />
        <Post catagory="javascript" />
        <Post catagory="ecmascript" />
        <Post catagory="typesctipr" />
        <Post catagory="recat" />
      </div>
      <div className='mid-right'>
        <h2>This is aside</h2>
        <img src="https://images.pexels.com/photos/3183152/pexels-photo-3183152.jpeg" alt='Post' />
        <h2>This is aside</h2>
        <img src="https://images.pexels.com/photos/3183152/pexels-photo-3183152.jpeg" alt='Post' />
        <h2>This is aside</h2>
        <img src="https://images.pexels.com/photos/3183152/pexels-photo-3183152.jpeg" alt='Post' />
        <h2>This is aside</h2>
        <img src="https://images.pexels.com/photos/3183152/pexels-photo-3183152.jpeg" alt='Post' />
      </div>


    </div>
  )
}

export default Home