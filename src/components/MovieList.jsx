import * as PropTypes from "prop-types";
import {MovieItem} from "./MovieItem";

export function MovieList({movies}) {
    return <section className="results">
        <div className="row">
            {movies.length>0&&movies.map(movie => <MovieItem key={movie.imdbID} movie={movie}/>)}

        </div>
    </section>;
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.any),
    callbackfn: PropTypes.func
};