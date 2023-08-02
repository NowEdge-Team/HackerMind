import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import { I18nextProvider } from "react-i18next";
import i18n from "./helpers/i18n";
import sagas from "./redux/sagas";

store.sagaMiddleware.run(sagas);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store.store}>
          <PersistGate persistor={store.persistor}>
              <I18nextProvider i18n={i18n}>
                  <App />
              </I18nextProvider>
          </PersistGate>
      </Provider>
  </React.StrictMode>,
)
