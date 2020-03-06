import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../utility';

const initialState = {
    results : []
};

const deleteResult = (state, action) => {
    const updatedArr = state.results.filter(res => res.id !== action.resultID);
    return updatedObject(state, {results : updatedArr});
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT :
            return updatedObject(state, {results : state.results.concat({ id : new Date(), value : action.result * 2})}); 
            // return {
            //     ...state,
            //     results : state.results.concat({ id : new Date(), value : action.result * 2}) // concat as it returns a new array, push updates the same array
            // }
        
        case actionTypes.DELETE_RESULT : 
            // const index = 2;
            // const newArr = [...state.results];
            // newArr.splice(index, 1);

            return deleteResult(state, action);

            // return {
            //     ...state,
            //     results : updatedArr
            // }

        default: return state;
    }
}

export default reducer;
