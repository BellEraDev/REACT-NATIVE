import imageReducer from './reducers/imageReducer';
import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
  imageStore: imageReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
