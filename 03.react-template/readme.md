#  Apply CSS In Recat Component .

## Inline Style ( Example 1 )

```
function Hello() {
    let head = {
        color: "white",
        fontSize: "2rem",
        padding: "2% 5%",
        backgroundColor: "teal",
    }
    return (
        <>
            {/* <div style={{ color: "white", fontSize: "2rem", padding: "2% 5%" }}>Hello</div> */}
            <div style={head}>Hello</div>
        </>
    )
}

export default Hello
```



## CSS Stylesheet Module Component ( Example 2 )

```
import React from 'react'
import './style.css'
function Hello (props) {
    let className = props.logo ? 'logo':'';
  return (
      <h1 className={ `${className} fs`}>Stylesheet</h1>
  )
}
export default Hello
```
<hr>

## App.js Component 

```
import Hello from "./Hello";
function App() {
  return (
    <>
      <Hello logo={true} />
    </>
  );
}
export default App;



```

# React With Bootstrap

**npm install npm i bootstrap@5.3.3**

> import "bootstrap/dist/css/bootstrap.min.css"

> import "bootstrap/dist/js/bootstrap.bundle.min.js" 



