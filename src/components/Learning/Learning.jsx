import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useReducer, useState} from "react";
import Flashcard from "../Flashcard/Flashcard";

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT_GOOD':
            return {...state, good: state.good++}
        case 'INCREMENT_MID':
            return {...state, mid: state.mid++}
        case 'INCREMENT_BAD':
            return {...state, bad: state.bad++}
        default:
            return state
    }
}

function Learning() {
    const [flashcards, setFlashcards] = useState([]);
    const [flashcard, setFlashcard] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [score, dispatch] = useReducer(reducer, {good: 0, mid: 0, bad: 0}, (state) => state)
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController()
        getFlashcardsApi(id, controller.signal)
            .then((data) => {
                setFlashcards(data);
                setFlashcard(data[Math.floor(Math.random() * data.length)])
                setIsLoading(false)
            })
            .catch(console.error);

        return () => {
            controller.abort();
        }
    }, [])

    useEffect(() => {
        if (flashcards.length === 0 && !isLoading){
            navigate('/end', {
                state: score
            })
        }
    }, [navigate, score])

    async function getFlashcardsApi(id, signal) {
        const response = await fetch(`/decks/${id}/flashcards`, {signal})
        return await response.json();
    }

    function nextFlashCard() {
        dispatch({
            type: 'INCREMENT_GOOD'
        })
        if (flashcards.length > 0) {
            setFlashcard(drawFlashCard());
        }
    }

    function drawFlashCard() {
        const flashCard = flashcards[Math.floor(Math.random() * flashcards.length)]
        setFlashcards(flashcards.filter((fc) => fc !== flashCard));
        return flashCard;
    }

    return (
        <div>
            {isLoading ? (
                <h3>Loading...</h3>
            ) : (
                <Flashcard card={flashcard} nextFlashCard={nextFlashCard}/>
            )}
        </div>
    );
}

export default Learning;