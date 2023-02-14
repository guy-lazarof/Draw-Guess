
export const SET_CHOOSEN_WORD = 'SET_CHOOSEN_WORD'

const initialState = {
    choosenWord: '',
}

export function chooseWordReducer(state = initialState, action) {
    let newState = state
    switch (action.type) {
        case SET_CHOOSEN_WORD:
            newState = { ...state, choosenWord: action.word }
            break
        default:
    }
    return newState
}
