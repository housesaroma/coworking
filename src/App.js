import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import "./styles/App.css";
import "./styles/fonts.css";

function App() {
    return (
        <div className="App">
            <Header title={"Главная"} />
            <MainPage/>
            <Footer />
        </div>
    );
}

export default App;
