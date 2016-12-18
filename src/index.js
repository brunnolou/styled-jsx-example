import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import App from './App';
import React from 'react';

render(<AppContainer><App /></AppContainer>, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./App', () => {
    const AppHot = require('./App').default;

    render(
      <AppContainer>
        <AppHot />
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
