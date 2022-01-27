import { Fragment } from "react";
import Title from "./components/Title";
import InputQuestion from "./components/InputQuestion";
import DisplayQuestion from "./components/DisplayQuestion";
import "./App.css";

function App() {
    return (
        <Fragment>
            <Title titleName={"Quiz App"} />
            <div className="container">
                <InputQuestion />
            </div>
            <div className="container">
                <DisplayQuestion />
            </div>
        </Fragment>
    );
}

export default App;
