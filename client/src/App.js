import Title from "./components/Title";
import InputQuestion from "./components/InputQuestion";
import "./App.css";

function App() {
    return (
        <div className="container">
            <Title titleName={"Quiz App"} />
            <InputQuestion />
        </div>
    );
}

export default App;
