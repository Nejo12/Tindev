import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'

import Header from './components/Header'

const App = () => (
  <div>
    <Header />
    <Container textAlign="center">
      <h1>Welcome to TinDev</h1>
      <p>Team 4 ;) </p>
    </Container>
  </div>
)

export default App
