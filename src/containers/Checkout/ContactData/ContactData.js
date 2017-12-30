import React, { Component } from 'react'

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import styles from './ContactData.css'

import axios from '../../../axios-orders'

export default class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipCode: ''
    },
    loading: false,

  }

  orderHandler = (event) => {
    event.preventDefault()
    
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Nick Forlivio',
        address: {
          street: 'Thorn Tree',
          zipCode: '85331',
        },
        email: 'whackdev@gmail.com'
      },
      deliveryMethod: 'fastest'
    }

    axios.post('/orders.json', order)
      .then(res => {
        this.setState({ loading: false });
        this.props.history.push('/')
      })
      .catch(err => {
        this.setState({ loading: false });
    });
  }
  
  render() {
    let form = (
      <form>
          <input className={styles.Input} type="text" name='name' placeholder='Your name'/>
          <input className={styles.Input} type="email" name='email' placeholder='Your Email'/>
          <input className={styles.Input} type="text" name='street' placeholder='Your Street Address'/>
          <input className={styles.Input} type="text" name='postalCode' placeholder='Your Zip Code'/>
          <Button  className={styles.Input} btnType="Success" clicked={this.orderHandler}>SUBMIT & ORDER</Button>
        </form>
    )
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={styles.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}       
      </div>
    )
  }
}
