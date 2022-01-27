import { Fragment, useState, useEffect } from "react";

const DisplayQuestion = () => {
    const [questions, setQuestions] = useState([]);

    async function deleteQuestion(id) {
        try {
            const res = await fetch(`http://localhost:5000/quiz/${id}`, {
                method: "DELETE",
            });

            setQuestions(
                questions.filter((question) => question.questionid !== id)
            );
        } catch (error) {
            console.error(error.message);
        }
    }

    async function getQuestions() {
        const res = await fetch("http://localhost:5000/quiz");

        const questArray = await res.json();

        setQuestions(questArray);
    }

    useEffect(() => {
        getQuestions();
    });

    return (
        <Fragment>
            <h2>Your Questions</h2>
            {questions.map((question) => (
                <div key={question.questionid} className="question-control">
                    <div className="question-text">
                        <p className="question-body">{question.questionbody}</p>
                        <p>{question.questionanswer}</p>
                    </div>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteQuestion(question.questionid)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </Fragment>
    );
};

export default DisplayQuestion;
