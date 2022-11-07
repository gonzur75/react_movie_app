import Button from 'react-bootstrap/Button';
import {Card, Container, Stack} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {getMovie, getMovieDetailsById} from "../Utils/utils";
import {useEffect, useState} from "react";
import data from "bootstrap/js/src/dom/data";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export function MovieDetail(props) {
    const [movieDetails, setMovieDetails] = useState({})
    let {movieID} = useParams();


    // let image = getMovieDetailsById(Number(id)).then(data);
    // console.log(image)
    useEffect(() => {
        getMovieDetailsById(movieID).then((data) => data && setMovieDetails(data))
    }, [])


    return (

        <Card border="info" style={{margin: '5px 0px'}}>
            <Container fluid="sm">
                <Row>
                    <Col>
                        <Card.Body className=" mx-auto" style={{alignSelf: 'center'}}>
                            <Card.Img style={{ width: '180px'}} src={movieDetails.Poster}/>
                        </Card.Body>
                    </Col>
                    <Col>
                        <Card.Body className=" mx-auto" style={{alignSelf: 'center'}}>
                            <Stack gap={3} className=" mx-auto">
                                <Card.Title>{movieDetails.Title}</Card.Title>
                                <Card.Subtitle>Director: {movieDetails.Director}</Card.Subtitle>
                                <Card.Text>{movieDetails.Plot}</Card.Text>
                            </Stack>
                        </Card.Body>
                    </Col>
                </Row>

            </Container>
        </Card>


    );
}


