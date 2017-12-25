import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import WrapperAux from '../../../hoc/WrapperAux/WrapperAux';

import classes from './SideDrawer.css';

const sideDrawer = (props) => {
  
  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <WrapperAux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />  
        </nav>
      </div>
    </WrapperAux>
  );
};

export default sideDrawer;
