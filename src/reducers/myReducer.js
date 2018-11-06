const initialState = {};

export function myReducer(state = initialState, action) {
    switch (action.type) {
        case 'NOTHING':
            return {
                ...state
            };
        default:
            return state;
    }
}