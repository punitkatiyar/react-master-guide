import React, { useState } from 'react'
function HookCounterTwo() {
    const initCounter=0
    const [count, setCount] = useState(initCounter)
    const incerementFive= () => {
        for (let i = 0; i < 5; i++)
        {
            // setCount( count +1 )
            setCount(prevCount => prevCount +1)
        }
    }
  return (
    <div>
        <center>
            <h1>Hook Counter Two {count}</h1>
            <button onClick={() => setCount(0)}> Reset </button>
            <button onClick={()=>  setCount(prevCount => prevCount + 1) }> Like</button>
            <button onClick={() =>  setCount(prevCount => prevCount - 1)}> Unlike </button>
            <button onClick={incerementFive}>Inctement Five {count }</button>
        </center>
      </div>
  )
}
export default HookCounterTwo