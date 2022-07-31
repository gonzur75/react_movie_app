import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export function SearchForm() {
    return <Form>
        <Row>
            <Col>
                <Form.Group className="my-1">
                    <Form.Control type="text" placeholder="Look up movie"/>
                </Form.Group>
            </Col>
            <Col className="my-1">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Col>
        </Row>
    </Form>;
}