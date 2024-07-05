//Component containing the application logic

import React, { createContext, useState, useRef } from "react";
import memData from "../meme_data/memData";

const MemContext = createContext();

export const MemProvider = ({ children }) => {
  const [memes, setMemes] = useState(memData); //main state
  const [preview, setPreview] = useState(false); //meme preview
  const [fileAdded, setFileAdded] = useState(false); //user info about the added file
  const fileRef = useRef(); 

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

  //Filtering memes for the '/hot' route
  const hotMemes = memes.filter((meme) => meme.upvotes - meme.downvotes > 5);

  //Sorting '/hot' by upvotes descending
  const sortedHotMemes = [...hotMemes].sort(
    (a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
  );

  //Filtering memes for the '/favorite' route
  const favMemes = memes.filter((meme) => meme.favorite === true);

  ////Logic for the form to add a meme
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file); 
      setPreview(imgURL); 
      setFileAdded(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const file = fileRef.current.files[0];

    if (!file) {
      return;
    } else {
      let title = file.name.split(".")[0]; 

      const imgURL = URL.createObjectURL(file); 

      const newMeme = {
        id: Date.now(), //unique id
        title: title,
        upvotes: 0,
        downvotes: 0,
        img: imgURL,
      };

      setMemes((prevMemes) => [newMeme, ...prevMemes]);

      fileRef.current.value = "";
      setPreview(false);
      setFileAdded(true);
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
