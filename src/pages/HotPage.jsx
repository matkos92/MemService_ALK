//Komponent wyświetlający memy według wzoru (upvote - downvote > 5)
//Sortowanie po ilości upvotes

import React, { useContext } from "react";
import { Container, Button, Image } from "react-bootstrap";
import Mem from "../components/Mem";
import MemContext from "../components/MemContext";
import { useNavigate } from "react-router-dom";

const HotPage = () => {
  const { memes } = useContext(MemContext);
  const navigate = useNavigate();

  const hotMemes = memes.filter((meme) => meme.upvotes - meme.downvotes > 5);

  const sortedHotMemes = [...hotMemes].sort(
    (a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
  );

  return (
    <Container className="my-4">
      <div className="text-center mb-4">
        <Image
          src="/images/Hot4.png"
          alt="Logo Hot"
          fluid
          className="mb-4 rounded"
        />
      </div>
      {sortedHotMemes.map((meme) => (
        <Mem key={meme.id} meme={meme} />
      ))}
      <div className="d-flex justify-content-center mt-4">
        <Button variant="dark" onClick={() => navigate("/regular")}>
          Go to Regular
        </Button>
      </div>
    </Container>
  );
};

export default HotPage;
