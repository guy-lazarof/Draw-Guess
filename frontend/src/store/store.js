import { combineReducers, createStore } from 'redux';

import { chooseWordReducer } from './choose.word.reducer.js';
import { playerNameReducer } from './player.name.reducer.js';
import { scoreReducer } from './score.reducer.js';

const rootReducer = combineReducers({
    chooseWordModule: chooseWordReducer,
    playerNameModule: playerNameReducer,
    scoreModule: scoreReducer,
})

const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)




