# React Evnet Handling

```
import React from 'react'

function ExampleOne() {

    const handelEvent = () => {
        alert("Hello User")
    }

    const tab = (data) => {
        alert(`Hello User ${data}`)
    }
    
    return (
        <>
            <h1>React Event Handling</h1>

            <button onClick={() => alert('hello')}>Click Me</button>

            <button onClick={handelEvent}>Click Two</button>

            <button onClick={() => tab("html")}>Click HTML</button>

            <button onClick={() => tab("css")}>Click Two</button>

        </>
    )
}

export default ExampleOne
```

 ## Start erros

> Invalid event handler property `onclick`. Did you mean `onClick`? Error Component Stack

> Expected `onClick` listener to be a function, instead got a value of `string` type





# Conditional Rendering in React  

> If and else

> Element Variable

> Ternary Oprater

> Short Circuite Oprater

## If and else Statement in class Component

```
import React, { Component } from 'react'

class UserGreat extends Component {
    constructor(props) {
      super(props)
      this.state = {
         userLog:false
      }
    }
    render() {
    if(this.state.userLog)
    {
    return <h1>Hello User</h1>
    }
    else
    {
    return <h1>Hello Gust</h1>
    }
  }
}
export default UserGreat
```

## If and else Statement in function Component

```
import React, { Component } from 'react'

class UserGreat extends Component {
    constructor(props) {
      super(props)
      this.state = {
         userLog:false
      }
    }
    render() {
    if(this.state.userLog)
    {
    return <h1>Hello User</h1>
    }
    else
    {
    return <h1>Hello Gust</h1>
    }
  }
}
export default UserGreat
```
