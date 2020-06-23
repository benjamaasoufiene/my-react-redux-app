import {INCREMENT, DECREMENT, RESET} from './counter.types';

export const increaseCounter = () => {
    return {
        type: INCREMENT,
    };

};

export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    };
};

export const resetCounter = () => {
    return {
        type: RESET,
    };
};
