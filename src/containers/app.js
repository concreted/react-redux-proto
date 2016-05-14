import React from 'react';
import { Provider } from 'react-redux';
import {
  GatewayProvider,
  GatewayDest
} from 'react-gateway';

import GalleryApp from './templates/gallery-app'

const App = ({store, group}) => {
  return (
    React.createElement(GatewayProvider, {},
      React.createElement(Provider, {store: store},
        React.createElement(GalleryApp, {group: group})
      )
    )
  );
}

export default App;
