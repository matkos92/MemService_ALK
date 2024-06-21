//Komponent wyświetlający mema oraz przyciski do głosowania

import React, { useContext } from "react";
import { Card, Button, Image, Row, Col, Container } from "react-bootstrap";
import {
  HandThumbsUp,
  HandThumbsDown,
  Star,
  StarFill,
} from "react-bootstrap-icons";
import MemContext from "../components/MemContext";

const Mem = ({ meme }) => {
  const { handleUpvote, handleDownvote, handleFavorite } =
    useContext(MemContext);

  return (
    <Container className="d-flex justify-content-center mb-4 ">
      <Card className="bg-dark text-white card-custom">
        <Card.Body className="text-center">
          <Image src={meme.img} alt={meme.id} fluid className="mb-3" />
          <Row className="justify-content-center align-items-center">
            <Col className="d-flex gap-2 gap-md-4">
              <Button
                variant="outline-success"
                onClick={() => handleUpvote(meme.id)}
                className="w-100"
              >
                <HandThumbsUp /> {meme.upvotes}
              </Button>
              <Button
                variant="outline-danger"
                onClick={() => handleDownvote(meme.id)}
                className="w-100"
              >
                <HandThumbsDown /> {meme.downvotes}
              </Button>
            </Col>
            <Row>
              <Col className="px-0 mx-md-0 pt-2">
                <Button
                  variant={meme.favorite ? "warning" : "secondary"}
                  onClick={() => handleFavorite(meme.id)}
                >
                  {meme.favorite ? <StarFill /> : <Star />}
                </Button>
              </Col>
            </Row>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Mem;
