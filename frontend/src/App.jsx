import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home'
import Choose from './components/Choose'
import CreatorSignup from './components/CreatorSignup';
import BusinessSignup from './components/BusinessSignup';
function App() {

  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    <Route path="/choose-role" element={<Choose />} />
        <Route path="/creator-signup" element={<CreatorSignup />} />
          <Route path="/business-signup" element={<BusinessSignup />} />
    </Routes>
  </Router>
  )
}

export default App
