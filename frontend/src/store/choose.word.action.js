import { SET_CHOOSEN_WORD } from './choose.word.reducer.js';
import { store } from './store.js';

// Action Creators:
export function getActionChooseWord(word, points) {
    store.dispatch({
        type: SET_CHOOSEN_WORD,
        word,
        points
    })
}

