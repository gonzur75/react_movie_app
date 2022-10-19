import './App.css';
import {Main} from "./components/Main";
import {createBrowserRouter} from "react-router-dom";



export function SeenMovie() {
    return (
        <>
            <h1>Takie tam</h1>
        </>
    )

}


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "seen",
        element: <SeenMovie />,
    },
    ]);



export default router;
