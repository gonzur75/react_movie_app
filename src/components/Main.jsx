import {useEffect, useState} from "react";
import {MovieList} from "./MovieList";
import {SearchForm} from "./SearchForm";


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
            <SearchForm onChange={handleChange} value={title} onClick={handleSubmit}/>
            <MovieList movies={movies}/>
        </>
    )
}
