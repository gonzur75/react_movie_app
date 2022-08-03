import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import * as PropTypes from "prop-types";
import {MovieItem} from "./MovieItem";
import {MovieList} from "./MovieList";


const getMovie = async (title) => {
    const url = `http://www.omdbapi.com/?s=${title}&apikey=${process.env.REACT_APP_API_KEY}`

    const response = await fetch(url)
    const responseJson = await response.json()
    if (responseJson.Search) {
        return responseJson.Search
    }
}



export function Main() {
    const [movies, setMovies] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [title, setTitle] = useState('')


    function handleChange(e) {
        e.preventDefault();
        setTitle(e.target.value)
    }

    useEffect(() => {
        getMovie(searchValue).then((data) => data && setMovies(data))
    }, [searchValue])

    function handleSubmit(e) {
        e.preventDefault()
        setSearchValue(title)
    }

    return (
        <>
            <Form>
                <Col>
                    <Form.Group className="my-1">
                        <Form.Control type="text"
                                      onChange={handleChange}

                                      name="title" value={title}
                                      placeholder="Find a movie ..."/>
                    </Form.Group>
                </Col>
                <Col className="my-1">
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Col>

            </Form>
            <MovieList movies={movies} />
            )}/>


        </>
    )
}
