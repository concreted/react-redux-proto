import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Gateway } from 'react-gateway';
import { bindActionCreators } from 'redux';
import Masonry from 'react-masonry-component';
import Waypoint from 'react-waypoint';

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

var masonryOptions = {
    transitionDuration: 0
};

class GalleryPage extends React.Component {

  /*
  On reaching end of page, trigger API call to fetch
  more data. Also change URL (param or /route).
  When data loaded into store, append the page's items
  to the end.
  */
  _loadMoreItems() {
    console.log('loading more items');
    console.log(this);
    // manipulate the redux store here to add more items
  }

  render() {
    let pages = this.props.pages.map(function(page) {
      let pageItems = page.map(function(item) {
        return Item(item)
      });

      return pageItems;
    });

    let msnry = React.createElement(Masonry, {options: masonryOptions},
      pages
    )

    return (
      div({className: 'gallery-page'},
        React.createElement('div', {className: 'gallery-page__content'},
          React.createElement('h1', {},
            `gallery`
          ),
          msnry,
          React.createElement(Waypoint,
            {
              onEnter: this._loadMoreItems.bind(this),
              onLeave: function() {},
              threshold: 0.5,
            }
          )
        )
      )
    );
  }
}

export default connect(mapStateToProps)(GalleryPage);
