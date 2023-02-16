import { SET_ADD_DRAW } from './draw.reducer.js';
import { store } from './store.js';

// Action Creators:
export function getActionDraw(draw) {
    store.dispatch({
        type: SET_ADD_DRAW,
        draw
    })
}


