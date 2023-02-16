import { combineReducers, createStore } from 'redux';

import { chooseWordReducer } from './choose.word.reducer.js';
import { scoreReducer } from './score.reducer.js';
import { socketIdReducer } from './socket.id.reducer.js';

const rootReducer = combineReducers({
    chooseWordModule: chooseWordReducer,
    socketIdModule: socketIdReducer,
    scoreModule: scoreReducer,
})

const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)




