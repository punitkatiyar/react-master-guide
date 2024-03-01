# React With Router


**React Router is a popular library for handling navigation in React applications. It enables the creation of single-page applications with navigation that feels like a traditional multi-page website. React Router provides a set of navigational components and a declarative approach to define the routes of your application.**

## Setup React With Router

> **npx create-react-app blog-app**

> **npm install react-router-dom@6**

## React Router Dom Component

> BrowserRouter

> Routes

> Route

> Link

> NavLink   
  

## App Component 

```
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import Page from './Page'
import Post from './Post'
import Profile from './Profile'
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
          <Route path="/page" element={<InsertData/>}/>
          <Route path="/post" element={<ViewData/>}/>
          <Route path="/profile" element={<DeleteData/>} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
```

## Header Component

```
import {NavLink } from 'react-router-dom'
const Header = () => {
  return (
      <>
          <header>
              <a href="home">Logo</a>
              <nav>
                  <ul>
                      <li><NavLink to="/">Home</NavLink></li>
                      <li><NavLink to="/page">Page</NavLink></li>
                      <li><NavLink to="/post">Post</NavLink></li>
                      <li><NavLink to="/profile">Profile</NavLink></li>
                  </ul>
              </nav>
          </header>
      </>
  )
}
export default Header;
```

## Home Component

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

# react-router-hook

```
import {useNavigate} from 'react-router-dom'

const navigate=useNavigate()

<button onClick={()=>navigate('login')}>Click To Go</button>

```
