export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'

export function setSearchQuery(title) {
    return {type: SET_SEARCH_QUERY, payload: title}
}