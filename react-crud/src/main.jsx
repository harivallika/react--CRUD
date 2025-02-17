import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Route,Routes,BrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './components/Home.jsx'
import Edit from './components/Edit.jsx'
import Create from './components/Create.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/create' element={<Edit></Edit>}></Route>
      <Route path='/edit/:userid' element={<Create></Create>}></Route>
      </Routes>
      </BrowserRouter>
  </StrictMode>,
)
