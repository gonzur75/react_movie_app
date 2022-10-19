import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as PropTypes from "prop-types";
import {useState} from "react";

const SearchForm = ({onSearchQuery}) => {

    const [searchValue, setSearchValue] = useState('')
    const handleChange = event => {
        setSearchValue(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        onSearchQuery(searchValue)


    }

    return <Form className="d-flex">
            <Form.Group className="me-3">
                <Form.Control type="text"
                          onChange={handleChange}
                          name="title"
                          value={searchValue}
                          placeholder="Find a movie ..."/>
            </Form.Group>
            <Button variant="outline-success" type="submit" onClick={handleSubmit}>Search</Button>
        </Form>;
}

export default SearchForm

SearchForm.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    onClick: PropTypes.func
};
