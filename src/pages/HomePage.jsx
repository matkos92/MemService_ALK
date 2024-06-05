//Komponent wyświetlający wszystkie memy ze statycznej tablicy

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Mem from "../components/Mem";
import MemContext from "../components/MemContext";
import { Container, Button, Image } from "react-bootstrap";

const HomePage = () => {
  const navigate = useNavigate();
  const { memes } = useContext(MemContext);

  return (
    <Container className="my-4">
      <div className="text-center mb-4">
        <Image
          src="/images/Logo.png"
          alt="Logo memservice"
          fluid
          className="mb-4 rounded"
        />
      </div>
      {memes.map((meme) => (
        <Mem key={meme.id} meme={meme} />
      ))}
      <div className="d-flex justify-content-center mt-4">
        <Button variant="dark" onClick={() => navigate("/hot")}>
          Go to Hot
        </Button>
      </div>
    </Container>
  );
};

export default HomePage;
