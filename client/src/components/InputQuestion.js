import { Fragment, useState } from "react";

const InputQuestion = () => {
    const [questionBody, setQuestionBody] = useState("");
    const [questionAnswer, setQuestionAnswer] = useState("");

    const onSubmitForm = async (e) => {
        // Prevents a submit button from submitting a form
        e.preventDefault();
        try {
            const body = { questionBody, questionAnswer };
            const res = await fetch("http://localhost:5000/quiz", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            // Reset the form
            setQuestionAnswer("");
            setQuestionBody("");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Fragment>
            <h2>Create a Question!</h2>
            <form className="form-control" onSubmit={onSubmitForm}>
                <div className="input-group">
                    <label>Question</label>
                    <input
                        type="text"
                        placeholder="What is your question?"
                        value={questionBody}
                        onChange={(e) => setQuestionBody(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label>Answer</label>
                    <input
                        type="text"
                        placeholder="What is your answer?"
                        value={questionAnswer}
                        onChange={(e) => setQuestionAnswer(e.target.value)}
                    />
                </div>
                <button className="btn" type="submit">
                    Add Question
                </button>
            </form>
        </Fragment>
    );
};

export default InputQuestion;
