import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom'

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from './containers/Checkout/Checkout'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/burger-builder' component={BurgerBuilder} />
            <Route path='/checkout' component={Checkout} />
            <Redirect from='/' to='/burger-builder' />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
