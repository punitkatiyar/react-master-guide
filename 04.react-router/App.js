import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes, useParams } from "react-router-dom";
import Header from "./blog/Header";
import Login from "./blog/Login";
function App() {
  const { tab } = useParams()
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="about" element={<h2>About Page</h2>}></Route>
            <Route path="contact" element={<h2>Contact Page</h2>}></Route>
            <Route path="blog" element={<h2>Blog Page</h2>}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="*" element={<h2>Page Not Found</h2>}></Route>
          </Route>
        </Routes>
      </div>













    </>
  );
}

export default App;
