//Component rendering the selected page of memes (based on received props)

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Mem from "../components/Mem";
import MemContext from "../components/MemContext";
import { Container, Button, Image } from "react-bootstrap";

const MemePage = ({ type }) => {
  const navigate = useNavigate();
  const { memes, sortedHotMemes, favMemes } = useContext(MemContext);

  let memsToDisplay;
  let logoSrc;
  let navigateTo;
  let buttonText;

  switch (type) {
    case "hot":
      memsToDisplay = sortedHotMemes;
      logoSrc = "/images/Hot4.png";
      navigateTo = "/regular";
      buttonText = "Go to Regular";
      break;
    case "favorite":
      memsToDisplay = favMemes;
      logoSrc = "/images/Favorite.png";
      navigateTo = "/regular";
      buttonText = "Go to Regular";
      break;
    default:
      memsToDisplay = memes;
      logoSrc = "/images/Logo.png";
      navigateTo = "/hot";
      buttonText = "Go to Hot";
      break;
  }

  return (
    <Container className="my-4">
      <div className="text-center mb-4">
        <Image src={logoSrc} alt="Logo" fluid className="mb-4 rounded" />
      </div>
      {memsToDisplay.map((meme) => (
        <Mem key={meme.id} meme={meme} />
      ))}
      <div className="d-flex justify-content-center mt-4">
        <Button variant="dark" onClick={() => navigate(navigateTo)}>
          {buttonText}
        </Button>
      </div>
    </Container>
  );
};

export default MemePage;
