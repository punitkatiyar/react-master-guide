# React Component

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
