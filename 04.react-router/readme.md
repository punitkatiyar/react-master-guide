# React With Router


**React Router is a popular library for handling navigation in React applications. It enables the creation of single-page applications with navigation that feels like a traditional multi-page website. React Router provides a set of navigational components and a declarative approach to define the routes of your application.**

## Setup React With Router

> **npm create vite@latest**

> **npm install react-router-dom@7**

## React Router Dom Component

> BrowserRouter

> Routes

> Route

> Link

> NavLink   
  

## How to setup router 

```
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/page" element={<InsertData/>}/>
      <Route path="/post" element={<ViewData/>}/>
      <Route path="/profile" element={<DeleteData/>} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  </BrowserRouter>
```

## Creating link

```

  <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/page">Page</NavLink></li>
      <li><NavLink to="/post">Post</NavLink></li>
      <li><NavLink to="/profile">Profile</NavLink></li>
  </ul>
```

## creating outlet 

```
import React from 'react'
import Header from './Header';
import { Outlet } from 'react-router-dom';
const Home = () => {
  return (
      <>
          <Header />
          <Outlet />
          
      </>
  )
}
export default Home;
```

# useNavigate Hook ( Middleware )

```
import {useNavigate} from 'react-router-dom'

const navigate=useNavigate()

<button onClick={()=>navigate('login')}>Click To Go</button>

```

# useParems Hook

```
<Route path="/page/:id" element={<CompName/>}/>

import { useParams } from 'react-router-dom'

const { id } = useParams()

{id}

```


