export const SET_PLAYER_NAME = 'SET_PLAYER_NAME'

const initialState = {
    playerName: '',
}

export function playerNameReducer(state = initialState, action) {
    let newState = state
    switch (action.type) {
        case SET_PLAYER_NAME:
            newState = { ...state, playerName: action.name }
            break
        default:
    }
    return newState
}
