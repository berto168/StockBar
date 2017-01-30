import React, { Component } from "react"
import List from './List'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDrinks } from '../actions/actions'

class Menu extends Component {

  componentWillMount() {
    this.props.getDrinks()
  }

  render() {
    return (
      <div className="Menu">
        <List />
      </div>
    )
  }
}

function mapStatetoProps(state){
  return state
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getDrinks
  }, dispatch)
}
export default connect(mapStatetoProps, mapDispatchToProps)(Menu)
