import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './home';
import Login from './login';
import Register from './register';
import Profile from './profile';
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
