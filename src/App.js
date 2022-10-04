import './App.css';
import {Main} from "./components/Main";
import {MovieNavbar} from "./components/MovieNavbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


export function SeenMovie() {
    return (
        <>
            <h1>Takie tam</h1>
        </>
    )

}

function App() {
    return (
        <Router>
            <MovieNavbar/>
            <Routes>
                <Route path='/' exact element={<Main />}/>
                    <Route path='seen'  element={<SeenMovie />}/>
            </Routes>
        </Router>
    );
}

export default App;
