import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type : actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type : actionTypes.DECREMENT
    }
}

export const onAdd = () => {
    return {
        type : actionTypes.ADD,
        value :  5,
    }
}

export const onSubtract = () => {
    return {
        type : actionTypes.SUB,
        value : 5
    }
}