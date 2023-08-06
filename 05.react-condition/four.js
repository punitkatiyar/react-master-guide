import React, { Component } from 'react'

class UserGreat extends Component {
    constructor(props) {
      super(props)
      this.state = {
         userLog:true
      }
    }
  render() {
    return this.state.userLog && <div>Welcome</div>
  }
}
export default UserGreat
