```
import React from 'react'

const Home = () => {
  return (
      <>
          <header>
              <a href="home">Logo</a>
              <nav>
                  <ul>
                      <li><a href="home">Home</a></li>
                      <li><a href="page">Page</a></li>
                      <li><a href="post">Post</a></li>
                      <li><a href="profile">Profile</a></li>
                  </ul>
              </nav>
          </header>
      </>
  )
}
export default Home;
///////////////////////////////////////////////////////////////////////////////
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
          <Route path="/" element={<Home/>}/>
          <Route path="/page" element={<Page/>}/>
          <Route path="/post" element={<Post/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
```



