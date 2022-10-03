import {ADD_WATCHED_MOVIE} from "../actions/watchedMovies";
import {initMetric} from "web-vitals/dist/modules/lib/initMetric";

const initialstate = {
    movie: {tile: 'takie tam'},
    myRating:'',
    toWatch: false

}

export function watchedMovies(state, {type, payload}) {
    if(type === ADD_WATCHED_MOVIE) {
        return[...state, payload ]
    }
    return state
}