import React, { Component } from 'react'

function withCounter(WrappedComponent, incrementNumber) {
  class WithCounter extends Component {

    constructor(props) {
      super(props);
      this.state = { 
        count: 0
      }
    }
  
    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + incrementNumber}
        }
      );
    }

    render() {

      const { count } = this.state;

      return <WrappedComponent count={count} incrementCount={this.incrementCount} name="Jitu Team" />;
    }
  }
  return WithCounter;
}

export default withCounter
