export const getMovie = async (title) => {
    const url = `http://www.omdbapi.com/?s=${title}&apikey=${process.env.REACT_APP_API_KEY}`

    const response = await fetch(url)
    const responseJson = await response.json()
    if (responseJson.Search) {
        return responseJson.Search
    }
}