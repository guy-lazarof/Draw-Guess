import { SET_SOCKET_ID } from './socket.id.reducer.js';
import { store } from './store.js';

// Action Creators:
export function getActionSocketId(id) {
    store.dispatch({
        type: SET_SOCKET_ID,
        id
    })
}


