import {useEffect, useState} from "react";

import {MovieNavbar} from "./MovieNavbar";
import {Provider} from "react-redux";
import store from "../redux/store";
import MovieList from "../containers/MovieList";


export function Main() {

    return (
        <>

            <MovieNavbar/>
            <MovieList/>

        </>
    )
}
