//Komponent zawierający główny stan aplikacji i logike formularza do dodawania mema

import React, { createContext, useState, useRef } from "react";
import memData from "../meme_data/memData";

const MemContext = createContext();

export const MemProvider = ({ children }) => {
  const [memes, setMemes] = useState(memData); //główny stan aplikacji
  const [preview, setPreview] = useState(false); //stan dla warunkowego renderu podglądu mema
  const [fileAdded, setFileAdded] = useState(false); //stan dla warunkowego renderu info dla użytkownika o dodanym pliku

  //Tytuły w bazie memów muszą być unikalne, dla nowo dodanego mema generowany jest unikalny tytuł
  
  const handleUpvote = (title) => {
    setMemes((prevMemes) =>
      prevMemes.map((meme) =>
        meme.title === title ? { ...meme, upvotes: meme.upvotes + 1 } : meme
      )
    );
  };

  const handleDownvote = (title) => {
    setMemes((prevMemes) =>
      prevMemes.map((meme) =>
        meme.title === title ? { ...meme, downvotes: meme.downvotes + 1 } : meme
      )
    );
  };

  const handleToggleFavorite = (title) => {
    setMemes((prevMemes) =>
      prevMemes.map((meme) =>
        meme.title === title ? { ...meme, favorite: !meme.favorite } : meme
      )
    );
  };

  //Obsługa dodawania mema w formularzu AddMemeForm
  //oraz warunkowego renderowania podglądu i informacji dla użytkownika o dadanym pliku
  const fileRef = useRef();

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
      title += Math.random().toString(36).slice(2); //dodanie losowego ciągu znaków do tytułu

      const imgURL = URL.createObjectURL(file); //tworzenie tymczasowego URL dla dodania mema

      const newMeme = {
        title: title,
        upvotes: 0,
        downvotes: 0,
        img: imgURL,
      };

      setMemes((prevMemes) => [newMeme, ...prevMemes]);

      fileRef.current.value = "";
      setPreview(false);
      setFileAdded(true); //wyświetlanie info o dodanym pliku
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
        handleToggleFavorite,
        preview,
        fileAdded,
        handleFileChange,
      }}
    >
      {children}
    </MemContext.Provider>
  );
};

export default MemContext;
