import SearchCity from "./components/SearchCity/SearchCity";
import './scss/app.scss';


function App() {

    return (
        <div className="wrapper">
            <h1 className="title">
                Weather App
            </h1>
            <SearchCity/>
        </div>
    );
}

export default App;
