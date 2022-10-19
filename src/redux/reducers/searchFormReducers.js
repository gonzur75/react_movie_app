import {SET_SEARCH_QUERY} from "../actions/searchQuery";

export function searchQuery(state='star wars', {type, payload}) {
    if (type === SET_SEARCH_QUERY) {
        return payload
    }
    return state
}