//Komponent wyświetlający memy dodane do ulubionych

import React, { useContext } from "react";
import Mem from "../components/Mem";
import MemContext from "../components/MemContext";
import { Container, Image } from "react-bootstrap";

const Favorite = () => {
  const { memes } = useContext(MemContext);

  const favMemes = memes.filter((meme) => meme.favorite === true);

  return (
    <Container className="my-4">
      <div className="text-center mb-4">
        <Image
          src="/images/Favorite.png"
          alt="Logo favorite"
          fluid
          className="mb-4 rounded"
        />
      </div>
      {favMemes.map((meme, index) => (
        <Mem key={`${meme.title}-${index}`} meme={meme} />
      ))}
    </Container>
  );
};

export default Favorite;
