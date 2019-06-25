import React, { Component } from 'react';
import './LoadIndicator.css';

/* Method that checks whether a props is empty 
prop can be an object, string or an array */

const isEmpty = (prop) => (
  prop === null ||
  prop === undefined ||
  (prop.hasOwnProperty('length') && prop.length === 0) ||
  (prop.constructor === Object && Object.keys(prop).length === 0)
);

const withLoader = (loadingProp) => (WrappedComponent) => {
  return class LoadIndicator extends Component {

    render() {
      console.log(this.props);

      return isEmpty(this.props[loadingProp]) ? <div className="loader" /> : <WrappedComponent {...this.props} />;
    }
  }
}

export default withLoader;

// isEmpty(this.props[loadingProp]) ? <div className="loader" /> : <WrappedComponent {...this.props} />