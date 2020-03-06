import * as actionTypes from './actionTypes';

export const saveResult = (res) =>  {
    // const updatedResult = res*2;
    return {
        type : actionTypes.STORE_RESULT,
        result : res
    };
}

export const storeResult = (res) => {
    // should not overuse getState, instead get all the data here from the component
    return (dispatch, getState) => {
        setTimeout(() => {
            // const oldCounter = getState().ctr.counter;
            // console.log('old counter:::', oldCounter);
            dispatch(saveResult(res));
        },2000);
    }
}

export const deleteResult = (id) => {
    return {
        type : actionTypes.DELETE_RESULT,
        resultID : id
    }
}