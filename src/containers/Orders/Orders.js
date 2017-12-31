import React, { Component } from 'react'

import Order from '../../components/Order/Order'
import Spinner from '../../components/UI/Spinner/Spinner'

import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

// import styles from './Orders.css'

class Orders extends Component {
  state = {
    orders: null,
    loading: true
  }
  componentDidMount() {
    axios.get('/orders.json')
      .then(res => {
        let fetchedOrders = []
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          })
        }
        this.setState({
          loading: false,
          orders: fetchedOrders
        })
      })
      .catch(err => {
        this.setState({ loading: false })
      })
  }
  render() {    
    return (
      <div>
        {this.state.loading ? <Spinner /> : this.state.orders.map(order => {
          return (
            <Order
              key={order.id}
              price={order.price}
              ingredients={order.ingredients}
            />
          )
        })}
      </div>
    )
  }
}

export default withErrorHandler(Orders, axios)