import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './Home';
import Contact from './Contact';
import NavBar from './NavBar';
import About from './About';

function App() {
  return (
   <div>
    <NavBar />
   <Routes>
    <Route exact path ='/home' element={<Home/>}></Route>
    <Route exact path ='/Contact' element={<Contact/>}></Route>
    <Route exact path ='/about' element={<About/>}></Route>
       </Routes>
   </div>
  )
}

export default App;
