import {useEffect, useState} from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import {Container, Row} from "react-bootstrap";
import CardFlash from "./CardFlash";


function Flashcards(props) {

    const [flashcards, setFlahcards] = useState([]);
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        const controller = new AbortController();
        getFlashcardsApi(controller.signal)
            .then((response) => {
                setFlahcards(response.data.results || [])
            });

        return () => {
            controller.abort()
        }
    }, [])

    async function getFlashcardsApi(signal) {
        try {
            return await axiosPrivate.get('/flashcards/');
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <Container className="mt-4">
            <Row>
                {flashcards.map((flashcard) => (
                    <CardFlash key={flashcard.id} card={flashcard}/>
                ))}
            </Row>
        </Container>
    );
}

export default Flashcards;