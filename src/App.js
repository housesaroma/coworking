import { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./components/context";
import "./styles/App.css";
import "./styles/fonts.css";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setIsAuth(true);
        }
        setLoading(false);
    }, []);

    return (
        <div>
            <AuthContext.Provider
                value={{
                    isAuth,
                    setIsAuth,
                    isLoading,
                }}
            >
                <HashRouter>
                    <AppRouter />
                </HashRouter>
            </AuthContext.Provider>
        </div>
    );
}

export default App;