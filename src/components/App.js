import React from 'react'
import Menu from './Menu'
import { connect } from 'react-redux'

function App(props) {

  return (
    <div className="App">
      <h2>Stock Bar</h2>
      <div className="container">
        <Menu menu={props.bar}/>
      </div>
    </div>
  )
}

function mapStatetoProps(state){
  return state
}

export default connect(mapStatetoProps)(App)
