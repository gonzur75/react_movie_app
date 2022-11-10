import Button from 'react-bootstrap/Button';
import {Card, Container, Stack} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {getMovie, getMovieDetailsById} from "../Utils/utils";
import {useEffect, useState} from "react";
import data from "bootstrap/js/src/dom/data";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


import Spinner from 'react-bootstrap/Spinner';

function MovieSpinner() {
    return <Spinner style={{position:"fixed", left:'50%', top:'50%', width: '100px', height: '100px'}} animation="border" variant="success" role="status"></Spinner>

}



export function MovieDetail(props) {
    const [movieDetails, setMovieDetails] = useState({})
    let {movieID} = useParams();


    // let image = getMovieDetailsById(Number(id)).then(data);
    // console.log(image)
    useEffect(() => {
         getMovieDetailsById(movieID).then((data) => data && setMovieDetails(data))
    }, [])

    if(Object.keys(movieDetails).length === 0 ) {
        return <MovieSpinner />
    }
    return (
        <Card border="info" style={{margin: '5px 0px', background: '#000000' }}>
            <Container fluid="sm">
                <Row className="justify-content-md-center">
                    <Col style={{display: "flex"}}>
                        <Card.Body className=" mx-auto"  style={{ alignSelf: 'center' }}>
                            <Card.Img style={{ width: '300px' }} src={movieDetails.Poster}/>
                        </Card.Body>
                    </Col>
                    <Col style={{display: "flex"}}>
                        <Card.Body className=" mx-auto" style={{alignSelf: 'center', color: '#fff'}}>
                            <Stack gap={3} className=" mx-auto">
                                <Card.Title style={{color: '#fff'}}>{movieDetails.Title}</Card.Title>
                                <Card.Subtitle>Director: {movieDetails.Director}</Card.Subtitle>
                                <Card.Subtitle>Year: {movieDetails.Year}</Card.Subtitle>
                                <Card.Text>{movieDetails.Plot}</Card.Text>
                            </Stack>
                        </Card.Body>
                    </Col>
                </Row>

            </Container>
        </Card>


    );
}


