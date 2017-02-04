import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import { buyDrink } from '../actions/actions'

class Drink extends Component {

  handleButtonClick(event) {
    debugger
    var drink = event.target.textContent
    var type = event.target.id
    console.log(this.props)
    this.props.buyDrink(drink, type)
  }
  render () {
    return (
      <div className="Drink">
        <button onClick={this.handleButtonClick} id={this.props.type}>
          {this.props.name}
        </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    buyDrink
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Drink)
