import React, { useState } from 'react'

function HookCounter() {
    // step 1
    const [count,setCount]=useState(0)
  return (
      <div>
            <center>
                <h1>{count}</h1>
                <button onClick={()=> setCount(count + 1) }> Like</button>
                <button onClick={() => setCount(count - 1)}> Unlike </button>
                <button onClick={() => setCount(0)}> Reset </button>
          </center>
          <hr/>
      </div>
  )
}

export default HookCounter