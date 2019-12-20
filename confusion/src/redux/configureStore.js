import { createStore } from 'redux';
import { Reducer, InitialState, initialState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer, // reducer
        initialState // initialState
    );

    return store;
}