import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import './index.less';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App) })
}