import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from '../Checkout/ContactData/ContactData'

import styles from './Checkout.css'

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0
  }

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search)
    let ingredients = {};
    let price

    for (let param of query.entries()) {
      // format: ['ingredient_name', 'value']
      if (param[0] === 'price') {
        price = param[1]
      }  else
      ingredients[param[0]] = +param[1]
    }
    this.setState({
      ingredients: ingredients,
      totalPrice: price
    })
  }

  checkoutCanceledHandler = () => {
    this.props.history.goBack()
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-info')
  }

  render() {
    let checkoutSummary = (
      this.state.ingredients ? <CheckoutSummary
        ingredients={this.state.ingredients}
        checkoutCanceled={this.checkoutCanceledHandler}
        checkoutContinued={this.checkoutContinuedHandler}
        price={this.state.totalPrice} /> : 
        <div>Loading...!</div>
    )

    return (
      <div className={styles.Checkout}>
        {checkoutSummary}
        <Route
          path={`${this.props.match.path}/contact-info`}
          render={(props) => {
            return <ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />
        }} />
      </div>
    )
  }
}

export default Checkout