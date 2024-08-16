import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { HomePage } from './HomePage.jsx'
import { About } from './About.jsx'



function App() {

    
  return (

    <>
    
    
      <HomePage />
      <Router>
        <Routes>
          
          <Route path='/About' element={<About />} />

        </Routes>

      </Router>

    </>

  );
}

export default App
