import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { BrowserRouter as Router } from "react-router-dom"
import './App.css'
import RouteLink from './RouteLinks'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
       <Router>
          <RouteLink />
      </Router>
   </>
  )
}

export default App
