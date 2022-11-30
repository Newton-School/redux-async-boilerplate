import { createStore } from 'redux'
import reducer from './reducers';

const initialState = {
    byId: {
        isLoading: null,
        isCompleted: null,
        error: null,
        data: null
    },
    byBulk: {
        isLoading: null,
        isCompleted: null,
        error: null,
        data: null
    }
};

const store = createStore(reducer, initialState);



export default store;
