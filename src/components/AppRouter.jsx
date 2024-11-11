import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes/router";
import Loader from "./UI/Loader/Loader";
import { AuthContext } from "./context";

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <Loader />;
    }

    return isAuth ? (
        <Routes>
            {privateRoutes.map((route) => (
                <Route
                    element={<route.component />}
                    path={route.path}
                    key={route.path}
                />
            ))}
            <Route path="*" element={<Navigate to="/main" />}></Route>
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route) => (
                <Route
                    element={<route.component />}
                    path={route.path}
                    key={route.path}
                />
            ))}
            <Route path="*" element={<Navigate to="/registration" />}></Route>
        </Routes>
    );
};

export default AppRouter;
