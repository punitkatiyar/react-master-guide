import React, { Component } from 'react'

class UserGreat extends Component {
    constructor(props) {
      super(props)
      this.state = {
         userLog:false
      }
    }
  render() {
    let msg;
    if(this.state.userLog)
    {
     msg =<div>Hello User</div>
    }
    else
    {
    msg= <div>Hello Gust</div>
    }
    return <h1>{ msg}</h1>
  }
}
export default UserGreat
