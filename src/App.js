import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './Styles/App.css'
import Files from './Components/Files'
import Login from './Components/Login'
import Crud from './Components/Crud'


function App() {

  const Footer=()=>{
    return(
      <div className="footer">
        <NavLink
          to='/'
          className='links'
          >
          Files
        </NavLink>
        <NavLink
          to='login'
          className='links'
          >
          Login
        </NavLink>
        <NavLink
          to='crud'
          className='links'
        >
          CRUD
        </NavLink>
      </div>
    )
  }
  return (
    <div className='App'>
      <Routes>
        <Route  path='/' element={<Files/>}/>
        <Route  path='login' element={<Login/>}/>
        <Route  path='crud' element={<Crud/>}/>
      </Routes>
      <Footer/>
    </div>
  );

}

export default App;
