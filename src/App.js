import React from 'react'
import Home from './components/homePage'
import NotFound from './components/notFound'
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