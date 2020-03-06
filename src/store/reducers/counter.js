import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../utility';

const initialState = {
    counter : 0
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT :
            return updatedObject(state, {counter: state.counter + 1});
            // return {
            //     ...state,
            //     counter: state.counter + 1
            // };

        case actionTypes.DECREMENT :
            return updatedObject(state, {counter: state.counter - 1});
            // return {
            //     ...state,
            //     counter: state.counter - 1
            // };

        case actionTypes.ADD :
            return updatedObject(state, {counter: state.counter + action.value});
            // return {
            //     ...state,
            //     counter: state.counter + action.value
            // };

        case actionTypes.SUB : 
            return updatedObject(state, {counter: state.counter - action.value});
            // return {
            //     ...state,
            //     counter: state.counter - action.value
            // };

        default: return state;
    }
}

export default reducer;
