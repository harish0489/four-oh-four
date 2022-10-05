import React from 'react'
import Home from './components/HomePage'
import NotFound from './components/NotFound'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {

 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  )
}

export default App