export const getMovie = async (title) => {
    const url = `http://www.omdbapi.com/?s=${title}&apikey=${process.env.REACT_APP_API_KEY}`

    const response = await fetch(url)
    const responseJson = await response.json()
    if (responseJson.Search) {
        return responseJson.Search
    }
}

export const getMovieDetailsById = async(number) => {
    const url = `http://www.omdbapi.com/?i=${number}&apikey=${process.env.REACT_APP_API_KEY}`
    const response = await fetch(url)
    const responseJson = await response.json()
    if (responseJson) {
        return responseJson
    }
}