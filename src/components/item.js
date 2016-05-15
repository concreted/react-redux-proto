import React from 'react';

import { div } from './html';

class Item extends React.Component {

  render() {
    return div({},
      `${this.props.name}, ${this.props.author}`
    );
  }
}

export default React.createFactory(Item);
