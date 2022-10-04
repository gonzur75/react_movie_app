import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import * as PropTypes from "prop-types";

export function SearchForm(props) {
    return <Form>
        <Col>
            <Form.Group className="my-1">
                <Form.Control type="text"
                              onChange={props.onChange}

                              name="title" value={props.value}
                              placeholder="Find a movie ..."/>
            </Form.Group>
        </Col>
        <Col className="my-1">
            <Button variant="primary" type="submit" onClick={props.onClick}>
                Submit
            </Button>
        </Col>
    </Form>;
}

SearchForm.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    onClick: PropTypes.func
};
