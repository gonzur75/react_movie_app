import {ADD_WATCHED_MOVIE} from "../actions/watchedMovies";

export function watchedMovies(state, {type, payload}) {
    if(type === ADD_WATCHED_MOVIE) {
        return[...state, payload ]
    }
    return state
}