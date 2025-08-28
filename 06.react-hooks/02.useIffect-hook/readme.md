
# useEffects Hook

**The useEffect hook is a fundamental part of React's functional component model. It allows you to perform side effects in your components, such as data fetching, DOM manipulation, and subscription management, after the component has rendered.**

## useEffect takes two arguments: 

> A callback 

> An optional array of dependencies.

## Types of useEffect Usage

### 1. Run on Every Render (no dependency array)

**Runs after every render (not common in real-world, can cause performance issues).**

```
useEffect(() => {
  console.log("Component rendered!");
});

```

### 2. Run Only Once (on Mount)

**Runs only once, useful for API calls, event listeners, etc.**

```
useEffect(() => {
  console.log("Component mounted!");
}, []);

```

### 3. Run When Dependencies Change

**Runs only when count value changes.**

```
useEffect(() => {
  console.log("Count updated:", count);
}, [count]);

```
### 4. Cleanup in useEffect

**Cleanup runs when component unmounts or before running the effect again.**

```
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running interval...");
  }, 1000);

  return () => {
    clearInterval(timer); // cleanup
    console.log("Interval cleared!");
  };
}, []);
```

## 1. Example 

```
import React, { useState, useEffect } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]); // The effect runs only when 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CounterComponent;
```

### Example Two

```
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs only once

  return <div>Timer: {count} seconds</div>;
};

export default Timer;

```

## Network Fetch with Axios

## 1. install axios using command


> #### npm install axios


<hr>

- https://jsonplaceholder.typicode.com/

<hr>

# Example For Fetch All Data

<hr>

```
import axios from 'axios'
import React , { useState , useEffect} from 'react'

function DataFetch() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
            console.log(err)
        })
    },[])
  return (
      <div>
          <ul>
              {
                  posts.map(post => (<li key={post.id}>{post.title }</li>))   
          }
          </ul>
      </div>
  )
}

export default DataFetch

```

<hr>

# Example For Search Data

<hr>

```
import axios from 'axios'
import React , { useState , useEffect} from 'react'

function DataFetchTwo() {
    const [posts, setPosts] = useState([])
    const [id,setId]=useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
            console.log(err)
        })
    },[id])
  return (
      <div>
          <input
              type='text'
              value={id}
              onChange={e=>setId(e.target.value)}
          />
          <h1>
               {posts.title }   
          </h1>
      </div>
  )
}

export default DataFetchTwo
```
