//Komponent zawierający logikę aplikacji i formularza do dodawania mema

import React, { createContext, useState, useRef } from "react";
import memData from "../meme_data/memData";

const MemContext = createContext();

export const MemProvider = ({ children }) => {
  const [memes, setMemes] = useState(memData); //główny stan aplikacji dla obiektu mema
  const [preview, setPreview] = useState(false); //stan dla warunkowego renderu podglądu mema
  const [fileAdded, setFileAdded] = useState(false); //stan dla warunkowego renderu info dla użytkownika o dodanym pliku
  const fileRef = useRef(); //zmienna referencyjna do formularza dodawania mema (type="file")

  const handleUpvote = (id) => {
    setMemes((prevMemes) =>
      prevMemes.map((meme) =>
        meme.id === id ? { ...meme, upvotes: meme.upvotes + 1 } : meme
      )
    );
  };

  const handleDownvote = (id) => {
    setMemes((prevMemes) =>
      prevMemes.map((meme) =>
        meme.id === id ? { ...meme, downvotes: meme.downvotes + 1 } : meme
      )
    );
  };

  const handleFavorite = (id) => {
    setMemes((prevMemes) =>
      prevMemes.map((meme) =>
        meme.id === id ? { ...meme, favorite: !meme.favorite } : meme
      )
    );
  };

  //Filtrowanie memów do route '/hot' według wzoru (upvote - downvote > 5)
  const hotMemes = memes.filter((meme) => meme.upvotes - meme.downvotes > 5);

  //Sortowanie '/hot' po ilości upvotes
  const sortedHotMemes = [...hotMemes].sort(
    (a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
  );

  //Filtrowanie memów do route '/favorite'
  const favMemes = memes.filter((meme) => meme.favorite === true);

  //Logika formularza do dodawania mema
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file); //tworzenie tymczasowego URL dla podglądu
      setPreview(imgURL); //wyświetlanie podglądu mema
      setFileAdded(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const file = fileRef.current.files[0];

    if (!file) {
      return;
    } else {
      let title = file.name.split(".")[0]; //ustawienie nazwy pliku jako tytułu mema ucinając rozszerzenie

      const imgURL = URL.createObjectURL(file); //tworzenie tymczasowego URL dla dodania mema

      const newMeme = {
        id: Date.now(), //unikalny identyfikator
        title: title,
        upvotes: 0,
        downvotes: 0,
        img: imgURL,
      };

      setMemes((prevMemes) => [newMeme, ...prevMemes]);

      fileRef.current.value = "";
      setPreview(false);
      setFileAdded(true); //wyświetlanie info o dodanym pliku
      console.log(newMeme);
    }
  };

  return (
    <MemContext.Provider
      value={{
        memes,
        handleUpvote,
        handleDownvote,
        fileRef,
        handleSubmit,
        handleFavorite,
        preview,
        fileAdded,
        handleFileChange,
        sortedHotMemes,
        favMemes,
      }}
    >
      {children}
    </MemContext.Provider>
  );
};

export default MemContext;
