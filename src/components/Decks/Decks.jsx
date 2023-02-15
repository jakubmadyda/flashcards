import Deck from "./Deck";
import {useContext, useEffect, useState} from "react";
import {Container, Row} from "react-bootstrap";
import AuthContext from "../../context/AuthProvider";
import {useLocalStorage} from "../../hooks/useLocalStorage";

function Decks() {
    const [decks, setDecks] = useState([])
    // const {auth} = useContext(AuthContext)
    const [auth] = useLocalStorage('tokens');

    useEffect(() => {
        const controller = new AbortController()

        getDecksApi(controller.signal)
            .then((data) => setDecks(data.results || []))
            .catch(console.error);

        return () => {
            controller.abort();
        }
    }, [])

    async function getDecksApi(signal) {
        console.log(auth)
        const response = await fetch('/api/v1/decks/', {
            signal,
            headers: {
                'Authorization': `Bearer  ${auth.access}`
            }
        });
        return await response.json();
    }

    return (
        <Container className="mt-4">
            <Row xs={1} md={2} className="g-4">
                {decks.map((deck) => (
                    <Deck key={deck.id} deck={deck}/>
                ))}
            </Row>
        </Container>
    );
}

export default Decks;