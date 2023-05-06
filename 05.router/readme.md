# React Router

> npm install react-router-dom@6

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
          <Route path="/page" element={<Page/>}/>
          <Route path="/post" element={<Post/>}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1>Page Not Found</h1>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
```
