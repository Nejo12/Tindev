import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'semantic-ui-react'
import './sass/styles.scss'

import Header from './components/Header'
import NavBar from './components/NavBar'

const App = () => (
  <div>
    <NavBar />
    <Header />
    <Container textAlign="center">
      <h1>Welcome to TinDev</h1>
      <p>Team 4 ;) </p>
    </Container>
  </div>
)

export default App
