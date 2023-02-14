
export const SET_ADD_SCORE = 'SET_ADD_SCORE'

const initialState = {
    score: 0,
}

export function scoreReducer(state = initialState, action) {
    let newState = state
    switch (action.type) {
        case SET_ADD_SCORE:
            newState = { ...state, score: state.score += action.points }

            break
        default:
    }
    return newState
}
