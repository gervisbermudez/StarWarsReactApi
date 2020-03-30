import { createStore } from 'redux';
import reducer from './reducer';
import ENVIRONMENT from '../../environments/environment'

const store = createStore(reducer, !ENVIRONMENT.PROD ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : null);
export default store;