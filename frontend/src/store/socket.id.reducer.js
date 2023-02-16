export const SET_SOCKET_ID = 'SET_SOCKET_ID'

const initialState = {
    socketId: '',
}

export function socketIdReducer(state = initialState, action) {
    let newState = state
    switch (action.type) {
        case SET_SOCKET_ID:
            newState = { ...state, socketId: action.id }
            break
        default:
    }
    return newState
}
