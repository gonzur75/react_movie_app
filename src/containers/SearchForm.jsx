import {connect} from "react-redux";

import SearchForm from "../components/SearchForm";
import {setSearchQuery} from "../redux/actions/searchQuery";

function mapDispatch(dispatch) {
    return {
         onSearchQuery:(title)=>dispatch(setSearchQuery(title)),
    }
}

export default connect(null , mapDispatch)(SearchForm)