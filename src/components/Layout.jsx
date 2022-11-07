import {MovieNavbar} from "./MovieNavbar";
import {Outlet} from "react-router-dom";

export function Layout() {

    return (
       <div className="row">
           <MovieNavbar/>
           <Outlet />
       </ div>
    )}
