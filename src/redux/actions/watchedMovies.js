export const ADD_WATCHED_MOVIE = 'ADD_WATCHED_MOVIE'

export default function addWatchedMovie(data) {
    return {type: ADD_WATCHED_MOVIE, payload: data}
}