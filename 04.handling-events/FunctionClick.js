import React from 'react'

function FunctionClick() {

    function clickHandlear()
    {
        console.log("Test");
    }




    return (
    <>
            <div>FunctionClick</div>
            <button onClick={clickHandlear}>Click</button>
    </>
  )
}

export default FunctionClick