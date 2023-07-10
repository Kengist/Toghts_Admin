import { combineReducers } from 'redux';
import auth from './auth/reducer';

const Reducers = combineReducers({
    auth
});

export default Reducers;