import React from 'react'
import Menu from './Menu'
import { connect } from 'react-redux'

function App(props) {

  return (
    <div className="App">
      <h2>Stock Bar</h2>
      <div className="container">
        {props.children}
        <Menu />
      </div>
    </div>
  )
}

function mapStatetoProps(state){
  return state
}

export default connect(mapStatetoProps)(App)
