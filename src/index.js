import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import myReducer from './myReducer/index';
import firebase from './config/config';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore ,compose} from 'redux';
import { getFirebase ,ReactReduxFirebaseProvider} from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import createSagaMiddleware  from 'redux-saga'
import rootSaga from './saga/index';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware=createSagaMiddleware();
const store=createStore(
  myReducer,
  composeEnhancer(applyMiddleware(thunk.withExtraArgument({getFirebase}),sagaMiddleware))
);
 const fbProps={
   firebase,
   config:{},
   dispatch:store.dispatch,
   createFirestoreInstance
 }

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...fbProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
sagaMiddleware.run(rootSaga);

serviceWorker.unregister();
