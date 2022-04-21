import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import NavBar from './Navbar'
import PageFooter from './PageFooter'
import Main from './Main'

function App() {
  return (

      <Router>
        <NavBar />
        <Main />
        <PageFooter />
      </Router>
 
  )
}

export default App
