import {combineReducers} from "redux"
import {watchedMovies} from "./watchedMovie";
import {searchForm, searchQuery} from "./searchFormReducers";


export default combineReducers({
    searchQuery
})