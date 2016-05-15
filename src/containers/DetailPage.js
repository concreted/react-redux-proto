import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Gateway } from 'react-gateway';
import { bindActionCreators } from 'redux';

import { div, h1 } from '../components/html';
import { Item, Product } from '../components';

function mapStateToProps(state) {
  const { data } = state;

  return {
    products: state.products // should be data.products
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

class DetailPage extends React.Component {

  render() {
    let products = this.props.products.map(function(product) {
      return Product(product)
    });

    return (
      div({className: 'detail-page'},
        React.createElement('div', {className: 'detail-page__content'},
          React.createElement('h1', {},
            `detail`
          )
        ),
        products
      )
    );
  }
}

export default connect(mapStateToProps)(DetailPage);
