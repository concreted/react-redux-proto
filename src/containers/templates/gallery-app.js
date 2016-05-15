import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Gateway } from 'react-gateway';
import { bindActionCreators } from 'redux';

import { div, h1 } from '../../components/html';
import { Item } from '../../components';

function mapStateToProps(state) {
  const { data } = state;

  return {
    items: state.items
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

class GalleryApp extends React.Component {

  render() {
    let items = this.props.items.map(function(item) {
      return Item(item)
    });

    return (
      div({className: 'gallery-app'},
        React.createElement('div', {className: 'gallery-app__content'},
          React.createElement('h1', {},
            `${this.props.group}`
          ),
          items
        )
      )
    );
  }
}

export default connect(mapStateToProps)(GalleryApp);
