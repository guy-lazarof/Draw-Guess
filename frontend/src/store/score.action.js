import { SET_ADD_SCORE } from './score.reducer.js';
import { store } from './store.js';

// Action Creators:
export function getActionScore(points) {
    store.dispatch({
        type: SET_ADD_SCORE,
        points
    })
}


