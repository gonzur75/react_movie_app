import {useEffect, useState} from "react";

import {MovieNavbar} from "./MovieNavbar";
import {Provider} from "react-redux";
import store from "../redux/store";
import MovieList from "../containers/MovieList";
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export function Main() {

    return (
       <div className="row">
           <MovieNavbar/>
           <MovieList/>
       </ div>



    //<div>
    //
    //
    //
    // </div>
)
}
