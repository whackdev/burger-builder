import React from 'react'

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

import styles from './CheckoutSummary.css'

const checkoutSummary = (props) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>Hope it tastes good!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button
        btnType="Danger"
        clicked>CANCEL</Button>
      <Button
        btnType="Success"
        clicked>CHECKOUT</Button>
    </div>
  )
}

export default checkoutSummary