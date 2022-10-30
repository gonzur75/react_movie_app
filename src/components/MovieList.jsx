import * as PropTypes from "prop-types";
import {MovieItem} from "./MovieItem";
import {useEffect, useState} from "react";
import {getMovie} from "../Utils/utils";

export function MovieList({searchQuery, addWatchedMovie}) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovie(searchQuery).then((data) => data && setMovies(data))
    }, [searchQuery])


    return <section className="results">

                {movies.length > 0 && movies.map(movie => <MovieItem key={movie.imdbID} movie={movie}
                                                                     addWatchedMovie={addWatchedMovie}/>)}

        </section>;

}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.any),
    callbackfn: PropTypes.func
};