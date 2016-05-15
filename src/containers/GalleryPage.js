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
    pages: state.pages
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

class GalleryPage extends React.Component {

  /*
  On reaching end of page, trigger API call to fetch
  more data. Also change URL (param or /route).
  When data loaded into store, append the page's items
  to the end.
  */

  render() {
    let pages = this.props.pages.map(function(page) {
      let pageItems = page.map(function(item) {
        return Item(item)
      });

      return pageItems;
    });

    return (
      div({className: 'gallery-page'},
        React.createElement('div', {className: 'gallery-page__content'},
          React.createElement('h1', {},
            `gallery`
          ),
          pages
        )
      )
    );
  }
}

export default connect(mapStateToProps)(GalleryPage);
