import { Fragment, useState } from "react";

const InputQuestion = () => {
    const [questionBody, setQuestionBody] = useState("");
    const [questionAnswer, setQuestionAnswer] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
    };

    return (
        <Fragment>
            <h2>Input Todo</h2>
            <form className="form-control">
                <div className="input-group">
                    <label>Label Field</label>
                    <input type="text" />
                </div>
                <div className="input-group">
                    <label>Label Field</label>
                    <input type="text" />
                </div>
                <button className="submit-control" type="submit">
                    SUBMIT
                </button>
            </form>
        </Fragment>
    );
};

export default InputQuestion;
