import React from 'react';
import { Provider } from 'react-redux';
import {
  GatewayProvider,
  GatewayDest
} from 'react-gateway';

import ShopApp from './templates/shop-app'

const App = ({store, group, page, item}) => {
  return (
    React.createElement(GatewayProvider, {},
      React.createElement(Provider, {store: store},
        React.createElement(ShopApp,
          {group: group, page: page, item: item}
        )
      )
    )
  );
}

export default App;
