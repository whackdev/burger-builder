import React, { Component } from 'react'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'

import styles from './Checkout.css'

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      bacon: 1,
      cheese: 1
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className={styles.Checkout}>
        <CheckoutSummary ingredients={this.state.ingredients} />
      </div>
    )
  }
}

export default Checkout