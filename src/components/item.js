import React from 'react';

import { a, div, img } from './html';

class Item extends React.Component {

  render() {
    return (
      div({className: 'item'},
        a({href: this.props.url},
          img({src: this.props.image})
        ),
        div({}, `${this.props.name}, ${this.props.author}`)
      )
    );
  }
}

export default React.createFactory(Item);
