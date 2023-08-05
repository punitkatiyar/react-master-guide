import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler()
    {
        console.log("Test Class");
    }
  render() {
    return (
        <div>
        <button onClick={this.clickHandler}>Click Class</button>
        </div>
    )
  }
}

export default ClassClick