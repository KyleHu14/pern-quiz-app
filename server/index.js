// Imports
const express = require("express");
const pool = require("./db");
const cors = require("cors");

// Initialize constants
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Get all quiz questions
app.get("/quiz", async (req, res) => {
    try {
        const allQuestions = await pool.query("SELECT * FROM quizQuestions");
        res.json(allQuestions.rows);
    } catch (error) {
        console.error(error.message);
    }
});

// Get a specific quiz question
app.get("/quiz/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const question = await pool.query(
            "SELECT * FROM quizQuestions WHERE questionId = $1",
            [id]
        );
        res.json(question.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

// Add a quiz question
app.post("/quiz", async (req, res) => {
    try {
        const { questionBody, questionAnswer } = req.body;
        const newQuestion = await pool.query(
            "INSERT INTO quizQuestions(questionBody, questionAnswer) VALUES ($1, $2) RETURNING *",
            [questionBody, questionAnswer]
        );

        res.json(newQuestion.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

// Update a question
app.put("/quiz/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { questionBody, questionAnswer } = req.body;
        const updatedQuestion = await pool.query(
            "UPDATE quizQuestions SET questionBody = $1, questionAnswer = $2 WHERE questionId = $3",
            [questionBody, questionAnswer, id]
        );
        res.json("Question Updated");
    } catch (error) {
        console.error(error.message);
    }
});

// Delete a question
app.delete("/quiz/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteQuestion = await pool.query(
            "DELETE FROM quizQuestions WHERE questionId = $1",
            [id]
        );
        res.json("Question Deleted");
    } catch (error) {
        console.error(error.message);
    }
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
