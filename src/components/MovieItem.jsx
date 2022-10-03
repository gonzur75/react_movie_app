import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {RatingWidget} from "./RatingWidget";
import * as PropTypes from "prop-types";
import {useState} from "react";
import addWatchedMovie from "../redux/actions/watchedMovies";


export function MovieItem({movie, addWatchedMovie}) {
    const [itemRating, setRating] = useState('')


    let handleRate = (rating)=>{
        addWatchedMovie({
            movie:movie,
            myRating: rating
        })
    };
    return (

        <div key={movie.imdbID} className='image-container result'>
            <img src={movie.Poster} alt='movie'/>
            <h5>{movie.Title} {movie.Year}</h5>
            <RatingWidget onRate={handleRate} rating={itemRating} />
            <div className='overlay d-flex align-items-center justify-content-center'>
                <h5>Add to favorites</h5>
            </div>
        </div>
    )


}

MovieItem.propTypes = {movie: PropTypes.any};
