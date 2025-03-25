# What Is Component.

**A React component is a reusable, self-contained piece of UI that can be used to build complex user interfaces. Components are like JavaScript functions but return React elements (JSX) that describe how a section of the UI should appear.**

## React components are two types :

> function Component (Recommended)

> class Component (Older approach)

## Create A Function Component 

- create a file name Hello.jsx on src directory 

```
import React from 'react'
function Hello() {
  return (
    <div>Hello</div>
  )
}
export default Hello

```

## Use Function Component

```
import Hello from "./Hello"

<Hello />

<Hello> </Hello>

```


## Property Binding with primitive data type and non Primitive data Type

**In React, property or prop binding refers to passing data from a parent component to a child component via props. Props are immutable, meaning they cannot be changed by the child component. This is useful when you want to pass data or event handlers to child components.**

> number , string , boolen , null

> array , object  


## Inside the content in function component

- {props.children}






# React class Component

> class component

> constructor()

> super() 

> render()

> user define method

## React Class Component [ rcc ] [ rce ]

```
import React, { Component } from 'react'

export default class Hello extends Component {
  render() {
    return (
      <div>Hello</div>
    )
  }
}
```

## React class Component with props and state

```
import React, { Component } from 'react'

export default class Welcome extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user :"Guest"
      }
    }
    clickHandler=()=>{
        this.setState({user:"User Profile"})
        // console.trace("Test The Handler");
    }
  render() {
    return (
      <div>
        <h1>Welcome {this.props.test} {this.state.user}</h1>
        <button onClick={this.clickHandler}>Login</button>
    </div>
    )
  }
}
<Welcome test="Punit"/>
```

-  Class components are rarely used in modern React applications since functional components with hooks provide the same features with less complexity.


