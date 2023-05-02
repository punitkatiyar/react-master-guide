import React, { Component } from 'react'

class UserGreat extends Component {
    constructor(props) {
      super(props)
      this.state = {
         userLog:false
      }
    }
  render() {
    return this.state.userLog ? (<div>Hello User</div>) : (<div>Hello Gust</div>)
  }
}
export default UserGreat
