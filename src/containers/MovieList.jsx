import addWatchedMovie from "../redux/actions/watchedMovies";
import {MovieList} from "../components/MovieList";
import {connect} from "react-redux";

function mapDispatch(dispatch) {
    return {
        addWatchedMovie:(movie)=>dispatch(addWatchedMovie(movie))
    }
}
//
// function
// export default connect(null, mapDispatch)(MovieList)