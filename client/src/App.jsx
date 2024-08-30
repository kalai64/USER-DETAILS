import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Users from './components/Users'
import Create from './components/Create'
import Update from './components/Update'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'

function App() {
  return <>
  
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Users/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/update/:id' element={<Update/>}/>
    </Routes>
  </BrowserRouter>
  </>
}

export default App