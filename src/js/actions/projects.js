export const actionsTypes = {
    SET_PROJECTS: '[Projects]:SetProjects',
    SET_FILTER_VALUE: '[Projects]:SetFilterValue',
    SET_ERROR: '[Projects]:SetError',
    ADD_PROJECT_DESCRIPTION: '[Projects]:AddProjectDescription'
}

export function setProjects(projects) {
    return { type: actionsTypes.SET_PROJECTS, payload: projects };
}

export function setFilterValue(value) {
    return { type: actionsTypes.SET_FILTER_VALUE, payload: value };
}

export function setError(error) {
    return { type: actionsTypes.SET_ERROR, payload: error };
}

export function addProjectDescription(description) {
    return { type: actionsTypes.ADD_PROJECT_DESCRIPTION, payload: description };
}