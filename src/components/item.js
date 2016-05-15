import React from 'react';

import { div, img } from './html';

class Item extends React.Component {

  render() {
    return (
      div({className: 'item'},
        img({src: this.props.image}),
        div({}, `${this.props.name}, ${this.props.author}`)
      )
    );
  }
}

export default React.createFactory(Item);
