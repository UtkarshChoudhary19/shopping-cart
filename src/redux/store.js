import {createStore} from 'redux';
import Postreducer from './reducer/PostReducer';

const store = createStore(Postreducer);
export default store;