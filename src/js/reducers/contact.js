import { actionsTypes } from '../actions/contact';

const initialState = {
    senderName: '',
    senderEmail: '',
    subject: '',
    message: '',
    error: undefined,
    isSending: false
}

export default function contactReducer(state = initialState, action) {
    switch (action.type) {
        case actionsTypes.SET_SENDER_NAME:
            return {
                ...state,
                senderName: action.payload
            };
        case actionsTypes.SET_SENDER_EMAIL:
            return {
                ...state,
                senderEmail: action.payload
            };
        case actionsTypes.SET_SUBJECT:
            return {
                ...state,
                subject: action.payload
            };
        case actionsTypes.SET_MESSAGE:
            return {
                ...state,
                message: action.payload
            };
        case actionsTypes.SEND:
            return {
                ...state,
                isSending: true
            };
        case actionsTypes.CLEAR_INPUT:
            return {
                ...initialState
            };
        case actionsTypes.SET_ERROR:
            return {
                ...state,
                isSending: false,
                error: action.payload
            };
        default:
            return state;
    }
}