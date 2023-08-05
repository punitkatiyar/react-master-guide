# React Form 

<hr>

>  value={this.state.user}

> onChange={this.handelUserName}

> onSubmit={this.handleSubmit}

<hr>

```
import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:""
      }
    }
    handelUserName = (event) => {
        this.setState({
            username :event.target.value
        })
        
    }
    handleSubmit = event =>  {
        alert(`${this.state.username}`);
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <input
                type='text'
                value={this.state.user}
                onChange={this.handelUserName}
            />
            <input type='submit'/>
        </form>
    )
  }
}

export default Form
```

