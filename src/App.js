import { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./components/context";
import "./styles/App.css";
import "./styles/fonts.css";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [authToken, setAuthToken] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setIsAuth(true);
        }
        
        const storedToken = localStorage.getItem("authToken");
        if (storedToken) {
            setAuthToken(storedToken);
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
                    authToken,
                    setAuthToken,
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
