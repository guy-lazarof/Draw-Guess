export const SET_CHOOSEN_WORD = 'SET_CHOOSEN_WORD'

const initialState = {
    choosenWord: '',
    points: 0,
}

export function chooseWordReducer(state = initialState, action) {
    let newState = state
    switch (action.type) {
        case SET_CHOOSEN_WORD:
            newState = { ...state, choosenWord: action.word, points: action.points }
            break
        default:
    }
    return newState
}
