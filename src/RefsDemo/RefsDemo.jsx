import React, { Component } from 'react';
import withRefs from './RefsHOC.jsx';



const RefsDemo = () => {
   
  return (<div className="contactApp">

      <RefsComponent />
    </div>
    )
  
}

/* A typical form component */

class SampleFormComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);

  }

  getCurrentState() {
    console.log(this.state.value)
    return this.state.value;
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })

  }
  render() {
    return (
      <input type="text" onChange={this.handleChange} />
    )
  }
}

const RefsComponent = withRefs(SampleFormComponent);

export default RefsDemo;