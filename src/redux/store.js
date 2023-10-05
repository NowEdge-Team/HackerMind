import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';

const composeEnhancers = (import.meta.env.VITE_NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistConfig = {
    key: 'hackermind',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
let persistor = persistStore(store);

export default { store, persistor, sagaMiddleware };
