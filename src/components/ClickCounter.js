import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {

  render() { 

    const { count, incrementCount, name } = this.props;

    return ( 
      <button onClick={incrementCount}>{name} Clicked {count} Times</button>
     );
  }
}
 
export default withCounter(ClickCounter, 10);