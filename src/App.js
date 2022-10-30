import './App.css';
import {Main} from "./components/Main";
import {createBrowserRouter} from "react-router-dom";
import {ProductDetail} from "./components/ProductDetail";



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
        children: [
            {
                path: "detail/:movieID",
                element: <ProductDetail />,
            },
        ],
    },

    ]);



export default router;
