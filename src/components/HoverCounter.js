import React, { Component } from 'react';
import withCounter from './withCounter';

class HoverCounter extends Component {

  render() { 

    const { count, incrementCount, name } = this.props;

    return ( 
      <h2 onMouseOver={incrementCount}>{name} Hovered {count} Times</h2>
     );
  }
}
 
export default withCounter(HoverCounter, 5);