
const Result = ({ restartQuiz, questionBank, userAnswers }) => {

    
    function getScore() {
        let finalScore = 0;
        userAnswers.forEach((answer, index) => {
            if(answer === questionBank[index].answers){
                finalScore++
            }
        });
        return finalScore
    }

    const score = getScore();
    return (
        <div>
            <h2>Quiz Result</h2>
            <p>Your score: {score}/{questionBank.length}</p>
            <div className="nav-button">
                {score > 2 ? 
                    <button className="restart-button" onClick={restartQuiz}>Proceed to Home Page</button>
                    : <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
                }
            </div>
        </div>
    )
}

export default Result