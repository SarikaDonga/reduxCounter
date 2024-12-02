import { INCREEMENT, DECREEMENT } from './action'

const initialState = {
    count: 10
}


const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREEMENT:
            return { ...state, count: state.count + 1 };
        case DECREEMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state
    }
}

export default counterReducer