import { createStore, combineReducers } from 'redux';

import projectsReducer from './reducers/projects';
import contactReducer from './reducers/contact';

const rootReducer = combineReducers({
    projectsReducer,
    contactReducer
});

export default createStore(rootReducer);
