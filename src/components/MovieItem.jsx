import {Card} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export function MovieItem({movie}) {
    return (

        <Card border="info"  >
            <Card.Img style={{width:'135px', height:'181px'}} variant="top" src={movie.Poster}/>
            <Card.Body >
                <Card.Title >{movie.Title}</Card.Title>
            </Card.Body>
        </Card>
    )


}