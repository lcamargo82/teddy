import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import Home from "../pages/home";

function Routers() {
    return (
        <Routes>
            <Route
                path="/login"
                element={
                    <PublicRoute element={<Login />} />
                }
            />

            <Route
                path="/"
                element={
                    <PrivateRoute element={<Home />} />
                }
            />
            <Route
                path="/selected-clients"
                element={
                    <PrivateRoute element={<Home />} />
                }
            />
        </Routes>
    );
}

export default Routers;
