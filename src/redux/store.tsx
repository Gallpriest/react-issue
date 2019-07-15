import { createStore } from '../../node_modules/redux';
import rootReducer from './reducers';

const store: any = createStore(rootReducer);

export default store;