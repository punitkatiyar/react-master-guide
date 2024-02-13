import React, { useState } from 'react'

function Home() {
  
   const handleClick=()=>{
    localStorage.clear();
    window.location.reload()
   }
    

  return (
    <>
   <h1>Profile Page</h1>
   <button onClick={handleClick}>Logout</button>
   




    </>






  )
}

export default Home