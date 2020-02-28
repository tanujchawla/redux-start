import * as actionTypes from '../actions';

const initialState = {
    results : []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT : 
            return {
                ...state,
                results : state.results.concat({ id : new Date(), value : action.result}) // concat as it returns a new array, push updates the same array
            }
        
        case actionTypes.DELETE_RESULT : 
            // const index = 2;
            // const newArr = [...state.results];
            // newArr.splice(index, 1);

            const updatedArr = state.results.filter(res => res.id !== action.resultID);

            return {
                ...state,
                results : updatedArr
            }

        default: return state;
    }
}

export default reducer;
