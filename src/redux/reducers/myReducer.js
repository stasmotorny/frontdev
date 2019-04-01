export function myReducer(state = {}, action) {
    switch (action.type) {
        case 'NOTHING':
            return {
                ...state
            };
        default:
            return state;
    }
}