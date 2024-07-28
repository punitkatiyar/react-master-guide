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
