
export const SET_ADD_DRAW = 'SET_ADD_DRAW'

const initialState = {
    draw: null,
}

export function drawReducer(state = initialState, action) {
    let newState = state
    switch (action.type) {
        case SET_ADD_DRAW:
            newState = { ...state, draw: action.draw }

            break
        default:
    }
    return newState
}
