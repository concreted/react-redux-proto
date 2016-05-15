import React from 'react';

import { div, img } from './html';

class Product extends React.Component {

  render() {
    return (
      div({className: 'product'},
        img({src: this.props.image}),
        div({}, `${this.props.name}, ${this.props.color}`)
      )
    );
  }
}

export default React.createFactory(Product);
