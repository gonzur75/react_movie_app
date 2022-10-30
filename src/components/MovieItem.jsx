import {Card, Nav} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {RatingWidget} from "./RatingWidget";
import * as PropTypes from "prop-types";
import {useState} from "react";
import addWatchedMovie from "../redux/actions/watchedMovies";


export function MovieItem({movie, addWatchedMovie}) {
    const [itemRating, setRating] = useState('')


    let handleRate = (rating) => {
        addWatchedMovie({
            movie: movie,
            myRating: rating
        })
    };
    return (
        // eslint-disable-next-line no-template-curly-in-string
        <Nav className='image-container result' >
            <Nav.Link href={'detail/' + movie.imdbID}>
                    <img src={movie.Poster} alt='movie' className='d-flex justify-content-center'/>
                    <h5>{movie.Title} {movie.Year}</h5>
                    <RatingWidget onRate={handleRate} rating={itemRating}/>
                    <div className='overlay d-flex align-items-center justify-content-center'>
                        <h5>Add to favorites</h5>
                    </div>

            </Nav.Link>
        </Nav>
    )


}

MovieItem.propTypes = {movie: PropTypes.any};
