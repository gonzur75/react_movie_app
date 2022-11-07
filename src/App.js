import './App.css';
import {Layout} from "./components/Layout";
import {createBrowserRouter, Route, Routes} from "react-router-dom";
import MovieList from "./containers/MovieList";
import {MovieDetail} from "./components/MovieDetail";



export function SeenMovie() {
    return (
        <>
            <h1>Takie tam</h1>
        </>
    )

}


export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<MovieList />} />
                    <Route path="detail/:movieID" element={<MovieDetail />}/>
                </Route>
            </Routes>
        </>
    )
}




