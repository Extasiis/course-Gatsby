import React from 'react'
import { Router } from '@reach/router'
import Home from '../component/home'
import MyCourse from '../component/my-course'

const App = (props) => {
  return (
    <>
      <Router>
        <Home path="/app" />
        <MyCourse path="/app/cursos" />
      </Router>
    </>
  )
}

export default App
