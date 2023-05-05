1. css stylesheet.
2. inline Style.
3. Style Modules .
4. CSS in Js Libaries.

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
