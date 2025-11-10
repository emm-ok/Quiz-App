import '../index.css';
import { useState } from "react"
import Result from "./Result";

const Quiz = () => {

    const questionBank = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "London", "Paris", "Rome"],
            answers: "Paris",
        },
        {
            question: "Which language is used for web apps?",
            options: ["PHP", "Python", "Javascript", "All"],
            answers: "All",
        },
        {
            question: "Who is the current CEO of Tesla?",
            options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
            answers: "Elon Musk",
        },
        {
            question: "What does JSX stand for?",
            options: [
                "JavaScript XML",
                "Java Syntax extension",
                "Just a simple eXample",
                "None of the above"
            ],
            answers: "JavaScript XML",
        },
    ]
    const initialAnswer = new Array(4);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState(initialAnswer);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    // const selectedAnswer = userAnswers[currentQuestion];

    function handleSelectedOption(option) {
        const newUserAnwer = [...userAnswers];
        newUserAnwer[currentQuestion] = option;
        setUserAnswers(newUserAnwer);
    }

    function goToPrev() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    function goToNext() {
        if (currentQuestion === questionBank.length - 1) {
            setIsQuizFinished(true);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    function restartQuiz() {
        setUserAnswers(initialAnswer);
        setCurrentQuestion(0);
        setIsQuizFinished(false);
    }

    if (isQuizFinished) {
        return <Result restartQuiz={restartQuiz} questionBank={questionBank} userAnswers={userAnswers} />
    }

    return (
        <div>
            <h2>Question {currentQuestion + 1}</h2>
            <p className="question">{questionBank[currentQuestion].question}</p>
            <div className="buttons">
                {questionBank[currentQuestion].options.map((option) => (
                    <button key={option} className={`option ${userAnswers[currentQuestion] === option ? 'selected' : ''}`} onClick={() => handleSelectedOption(option)}>{option}</button>
                ))}
            </div>
            <div className="nav-buttons">
                <button onClick={goToPrev} disabled={currentQuestion === 0}>Previous</button>
                <button onClick={goToNext} disabled={!userAnswers[currentQuestion]}>{currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}</button>
            </div>
        </div>
    )
}

export default Quiz