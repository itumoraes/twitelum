import React from 'react';
import ReactDOM from 'react-dom';

// CSS Global
import './assets/css/reset.css'
import './assets/css/container.css'
import './assets/css/btn.css'
import './assets/css/icon.css'
import './assets/css/iconHeart.css'

import './assets/css/novoTweet.css'
// import './index.css';

// import HomePage from './pages/HomePage';
import registerServiceWorker from './registerServiceWorker';

// Roteamento
import { BrowserRouter } from 'react-router-dom'
import Roteamento from './routes'

// Context
import { NotificacaoContextProvider } from './context/NotificacaoContext'

// Store
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <NotificacaoContextProvider>
      <BrowserRouter>
        <Roteamento />
      </BrowserRouter>
    </NotificacaoContextProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
