import * as PropTypes from "prop-types";
import {MovieItem} from "./MovieItem";

export function MovieList({movies, addWatchedMovie}) {
    return <section className="results">
        <div className="row">
            {movies.length>0&&movies.map(movie => <MovieItem key={movie.imdbID} movie={movie} addWatchedMovie={addWatchedMovie}/>)}

        </div>
    </section>;
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.any),
    callbackfn: PropTypes.func
};