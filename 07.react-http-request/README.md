# HTTP ( Network Call ) Client side api request

> fetch

> axiox


## fetch api in javascript 

### Syntax 

```
fetch(url, options)
    .then(response => {
        // Handle the response
    })
    .catch(error => {
        // Handle errors
    });
```

- url – The API or resource URL to fetch.

- options (optional) – An object containing settings like method, headers, and body.

- Returns a Promise that resolves to the Response object.

  <hr>


### Example 

```
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())  // Convert response to JSON
.then(data => console.log(data))    // Handle the data
.catch(error => console.error('Error:', error)); // Handle errors
```

## setup axios on react app

```
npm install axios
```

### API Routes

- get()

- post()

- put()

- delete()

## 1. Get data from Api in function component 

```
import axios from 'axios'
import React, { useEffect, useState } from 'react'
function Posts() {
    // step 1 : api data holding
    const [posts, setPosts] = useState([])
    //  step 2
    useEffect(() => {
        // setp 3 
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                // console.log(res.data);
                // send data to state
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    // step 4 ; map the data 
    const list = posts.map((post) => <li key={post.id}>{post.title}</li>)
    return (
        <div>
            <ol>
                {/* print data */}
                {list}
            </ol>
        </div>
    )
}
export default Posts
```
## 2. Get data from Api in class component 

```
import axios from 'axios'
import React, { Component } from 'react'
class ArticleList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          posts: [],
          errMsg:''
      }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(Response => {
                console.log(Response)
                this.setState({posts:Response.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({errMsg:'Data Not Found'})
            })
    }
    render() {
        const { posts , errMsg }= this.state

        return (
            <div className='container'>
                <h1>Article List Sample With id , title , message</h1>
                {
                    posts.length ?
                        posts.map(post =>
                            <div className='post' key={post.id}>
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>
                            </div>) :
                        null
                }
                {
                    errMsg ? <div>{ errMsg }</div> : null
                }
            </div>
        )
    }
}
export default ArticleList
```

