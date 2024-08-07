import { useState, useEffect } from 'react'
import './App.css'
import './HomePage.jsx'
import { HomePage } from './HomePage.jsx'


function App() {
  const [count, setCount] = useState(0)

  // Useeffect is used each time the application renders
  // If you have a second argument of a list, then it will render only when that argument inside the list changes
  return (
    <HomePage/>
  );
}

export default App
