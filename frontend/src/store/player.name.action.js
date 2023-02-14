// import { SET_PLAYER_NAME } from './choose.word.reducer.js';
import { SET_PLAYER_NAME } from './player.name.reducer.js';
import { store } from './store.js';

// Action Creators:
export function getActionPlayerName(name) {
    store.dispatch({
        type: SET_PLAYER_NAME,
        name
    })
}


