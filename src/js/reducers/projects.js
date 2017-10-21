import { actionsTypes } from '../actions/projects';

const initialState = {
    projects: [],
    isLoading: true,
    filterValue: '',
    error: undefined
}

export default function projectsReducer(state = initialState, action) {
    switch (action.type) {
        case actionsTypes.SET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
                isLoading: false,
                error: undefined
            };
        case actionsTypes.SET_FILTER_VALUE:
            return {
                ...state,
                filterValue: action.payload
            };
        case actionsTypes.SET_ERROR:
            return {
                ...state,
                projects: [],
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}