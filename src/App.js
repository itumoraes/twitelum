import React, { Component } from 'react'
import Cabecalho from './components/Cabecalho'
import NavMenu from './components/NavMenu'
import './App.css'

class App extends Component {
  render() {
    return (
      <Cabecalho>
        <NavMenu usuario="@omariosouto" />
      </Cabecalho>
    )
  }
}

export default App
