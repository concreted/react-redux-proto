import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Gateway } from 'react-gateway';
import { bindActionCreators } from 'redux';

const GalleryApp = ({group}) => {
  return (
    React.createElement('div', {className: 'gallery-app'},
      React.createElement('div', {className: 'gallery-app__content'},
        React.createElement('div', {},
          `${group}`
        )
      )
    )
  );
}

export default GalleryApp;
