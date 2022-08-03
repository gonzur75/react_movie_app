import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {RatingWidget} from "./RatingWidget";
import * as PropTypes from "prop-types";


export function MovieItem({movie}) {
    return (

        <div key={movie.imdbID} className='image-container result'>
            <img src={movie.Poster} alt='movie'/>
            <h5
            >{movie.Title} {movie.Year}</h5>
            <RatingWidget />
            <div className='overlay d-flex align-items-center justify-content-center'>
                <h5>Add to favorites</h5>
            </div>
        </div>
    )


}

MovieItem.propTypes = {movie: PropTypes.any};
