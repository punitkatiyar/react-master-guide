#  Apply CSS In Recat Component .

3. Style Modules .
4. CSS in Js Libaries.

## Inline Style

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



## CSS Stylesheet Component 

```
import React from 'react'
import './style.css'
function Stylesheet(props) {
    let className = props.logo ? 'logo':'';
  return (
      <h1 className={ `${className} fs`}>Stylesheet</h1>
  )
}
export default Stylesheet
```
<hr>

## App.js Component 

```
import Stylesheet from "./Stylesheet";
function App() {
  return (
    <>
      <Stylesheet logo={true} />
    </>
  );
}
export default App;



```
