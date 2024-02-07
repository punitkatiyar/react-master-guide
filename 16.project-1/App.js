import { Route, Routes } from 'react-router-dom';
import Home from './user/Home';
import UserInsert from './user/UserInsert';
import UserView from './user/UserView';

function App() {
  return (
    <>
      <Home />

      <div className='mid'>
        <Routes>
          <Route path="/" element={<h1>Welcome to react CRUD App</h1>}></Route>
          <Route path="/insert" element={<UserInsert />}></Route>
          <Route path="/view" element={<UserView />}></Route>
        </Routes>
      </div>



    </>
  );
}

export default App;
