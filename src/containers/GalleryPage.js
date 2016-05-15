import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Gateway } from 'react-gateway';
import { bindActionCreators } from 'redux';

import { div, h1 } from '../components/html';
import { Item } from '../components';

function mapStateToProps(state) {
  const { data } = state;

  return {
    items: state.items
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

class GalleryPage extends React.Component {

  render() {
    let items = this.props.items.map(function(item) {
      return Item(item)
    });

    return (
      div({className: 'gallery-page'},
        React.createElement('div', {className: 'gallery-page__content'},
          React.createElement('h1', {},
            `gallery`
          ),
          items
        )
      )
    );
  }
}

export default connect(mapStateToProps)(GalleryPage);
