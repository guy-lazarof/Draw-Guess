import { combineReducers, createStore } from 'redux';

import { chooseWordReducer } from './choose.word.reducer.js';
import { playerNameReducer } from './player.name.reducer.js';

const rootReducer = combineReducers({
    chooseWordModule: chooseWordReducer,
    playerNameModule: playerNameReducer,
})


const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)




