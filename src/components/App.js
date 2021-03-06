import React, { Component } from 'react'
import Menu from './Menu'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import { getDrinks } from '../actions/actions'

class App extends Component {

  componentWillMount() {
    this.props.getDrinks()
  }

  handleClick(event) {
    debugger
    console.log(this.props)
  }

  render () {
    return (
      <div className="App">
        <h2>Stock Bar</h2>
        <button onClick={this.handleClick}>TEST</button>
        <div className="container">
          <Menu menu={this.props.bar} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getDrinks
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
