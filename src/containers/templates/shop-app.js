import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Gateway } from 'react-gateway';
import { bindActionCreators } from 'redux';

import { div, h1 } from '../../components/html';
import { Item } from '../../components';

import DetailPage from '../DetailPage';
import GalleryPage from '../GalleryPage';

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

class ShopApp extends React.Component {

  render() {

    let Page = GalleryPage;
    if (this.props.group === null) {
      Page = DetailPage;
    }

    let header = this.props.group ? this.props.group : this.props.item

    return (
      div({className: 'shop-app'},
        React.createElement('div', {className: 'shop-app__content'},
          React.createElement('h1', {},
            `${header}`
          ),
          React.createElement(Page, {page: this.props.page})
        )
      )
    );
  }
}

export default connect(mapStateToProps)(ShopApp);
