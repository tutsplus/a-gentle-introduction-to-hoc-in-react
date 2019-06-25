import React, { Component } from 'react';


const withAuth = WrappedComponent => {
  return class ProtectedRoutes extends Component {

    /* Checks whether the used is authenticated on Mount*/
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/login');
      }
    }

    render() {

      return (
        <div>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

export default withAuth;