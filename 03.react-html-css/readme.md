#  Apply CSS In Recat Component .

## Inline Style ( Example 1 )

```
import React from 'react'
function Hello(props) {
    const card = {
        width: "30%",
        height: "300px",
        background: "royalblue",
        float: "left",
        margin:"1%"
    }
    const title = {
        color:"white"
    }
    return (
      <div style={card}>
            <h1 style={ title}>{props.name} {props.user}</h1>
      </div>      
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
