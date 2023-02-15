import {useState} from "react";
import Question from "./Question";
import Answer from "./Answer";

function Flashcard({card, nextFlashCard}) {
    const [isQuestion, setIsQuestion] = useState(true);
    return (
        <div>
            {isQuestion ? (
                <Question question={card.question} onClick={() => setIsQuestion(false)}/>
            ) : (
                <Answer answer={card.answer} nextFlashCard={nextFlashCard} setIsQuestion={setIsQuestion}/>
            )}
        </div>
    );
}

export default Flashcard;