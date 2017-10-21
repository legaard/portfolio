export const actionsTypes = {
    SET_SENDER_NAME: '[Contact]:SetSenderName',
    SET_SENDER_EMAIL: '[Contact]:SetSenderEmail',
    SET_SUBJECT: '[Contact]:SetSubject',
    SET_MESSAGE: '[Contact]:SetMessage',
    SEND: '[Contact]:Send',
    CLEAR_INPUT: '[Contact]:ClearInput',
    SET_ERROR: '[Contact]:SetError'
}

export function setSenderName(name) {
    return { type: actionsTypes.SET_SENDER_NAME, payload: name };
}

export function setSenderEmail(email) {
    return { type: actionsTypes.SET_SENDER_EMAIL, payload: email };
}

export function setSubject(subject) {
    return { type: actionsTypes.SET_SUBJECT, payload: subject };
}

export function setMessage(message) {
    return { type: actionsTypes.SET_MESSAGE, payload: message };
}

export function send() {
    return { type: actionsTypes.SEND };
}

export function clearInput() {
    return { type: actionsTypes.CLEAR_INPUT };
}

export function setError(error) {
    return { type: actionsTypes.SET_ERROR, payload: error };
}