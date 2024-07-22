import React from 'react'
// import "./start.css"
function Start() {
    const data = "Hello App With Css";
    const title = { color: "tomato", textAlign: "right", fontSize: "5rem" }
    return (
        <>
            {/* <font color="red"> */}
            {/* 

            Error: The `style` prop expects a mapping from style properties to values, not a string. 
            
            For example style={{marginRight: spacing + 'em'}} when using JSX.
            
            */}


            {/* <h1 style="color:green;">Start css with react</h1> */}

            <h1 style={{ color: "green", textAlign: "center" }}>Start css with react {data}</h1>

            <h1 style={title}>Start css with react {data}</h1>

            <h1 className="title">This is External Css Example</h1>
            {/* property `class`. Did you mean `className`? */}
            {/* </font> */}
        </>
    )
}
export default Start