import logo from './logo.svg';
import './App.css';
import Head from './Head';
import Nav from './Nav';
import Phtml from './component/Phtml';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Head></Head>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<h1>This is Home</h1>}></Route>
          <Route path='/html' element={<Phtml />}></Route>
          <Route path='/css' element={<h1>This is CSS Page</h1>}></Route>
          <Route path='/js' element={<h1>This is Javascript Page</h1>}></Route>
          <Route path='/react' element={<h1>This is React Page</h1>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;
