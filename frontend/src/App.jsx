import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home'
import Choose from './components/Choose'
import CreatorSignup from './components/CreatorSignup';
import BusinessSignup from './components/BusinessSignup';
import Login from './components/Login';
import CreatorForm from './components/CreatorForm';
import BusinessForm from './components/BusinessForm';
import CreatorDashboard from './components/CreatorDashboard';
import BusinessDashboard from './components/BusinessDashboard';
function App() {

  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    <Route path="/choose-role" element={<Choose />} />
        <Route path="/creator-signup" element={<CreatorSignup />} />
          <Route path="/business-signup" element={<BusinessSignup />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/creator-form' element={<CreatorForm/>}/>
          <Route path='/business-form' element={<BusinessForm/>}/>
          <Route path='/creator-dashboard' element={<CreatorDashboard/>}/>
          <Route path='/business-dashboard' element={<BusinessDashboard/>}/>
    </Routes>
  </Router>
  )
}

export default App
