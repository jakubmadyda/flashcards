import {Link} from "react-router-dom";
import {Badge, Card, Col} from "react-bootstrap";
import {faker} from "@faker-js/faker";

function CardFlash({card: {question, answer, id, tags}}) {
    return (
        <Col>
            <Link to={`/decks/${id}/`}>
                <Card>
                    <Card.Img variant="top" src={faker.image.technics(480, 200, true)}/>
                    <Card.Body>
                        <Card.Title>
                            {question}
                        </Card.Title>
                        <Card.Text>
                            {answer}
                        </Card.Text>
                        <Card.Text>
                            {tags.map((tag) => (
                                    <Badge key={tag.name} bg="primary" className="me-1">
                                        {tag.name}
                                    </Badge>
                                )
                            )}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}

export default CardFlash;