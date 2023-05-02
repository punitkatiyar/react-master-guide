import React, { Component } from 'react'

class BuindEvent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:"Hello"
        }
        // buind class constructor
        this.clickHandler=this.clickHandler.bind(this)
    }
    // Buind Rander
    // clickHandler()
    // {
    //     this.setState({
    //         msg:"Bye"
    //     })
    //     console.log(this);
    // }
    
    // Class property as Arrow function
    clickHandler = () => {
        this.setState({
            msg:"Bye"
        })
    }



  render() {
    return (
        <div>
            <h1>{ this.state.msg}</h1>
            {/*<button onClick={this.clickHandler.bind(this)}>Buind One</button>*/}
            {/*<button onClick={()=>this.clickHandler()}>Buind Two </button>*/}
            <button onClick={this.clickHandler}>Buind Three Using constructor </button>
        
        
        </div>
    )
  }
}

export default BuindEvent