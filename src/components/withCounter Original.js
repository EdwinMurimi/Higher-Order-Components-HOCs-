import React, { Component } from 'react'

function UpdatedComponent(OriginalComponent) {
  class NewComponent extends Component {

    constructor(props) {
      super(props);
      this.state = { 
        count: 0
      }
    }
  
    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + 1}
        }
      );
    }

    render() {

      const { count } = this.state;

      return <OriginalComponent count={count} incrementCount={this.incrementCount} {...this.props} />;
    }
  }
  return NewComponent;
}

export default UpdatedComponent
