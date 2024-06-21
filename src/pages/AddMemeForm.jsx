//Komponent z formularzem do dodawania mema

import React, { useContext } from "react";
import MemContext from "../components/MemContext";
import { Container, Image, Form, Button } from "react-bootstrap";

export default function AddMemeForm() {
  const { fileRef, handleSubmit, preview, fileAdded, handleFileChange } =
    useContext(MemContext);

  return (
    <Container className="text-center my-4">
      <div className="mb-4">
        <Image src="/images/Add.png" alt="logo add your meme" fluid className="mb-4 rounded" />
      </div>
      {preview && (
        <Image
          src={preview}
          alt="Preview"
          fluid
          style={{
            maxWidth: "300px",
            maxHeight: "300px",
            marginBottom: "20px",
          }} 
        />
      )}
      {fileAdded && <h2 className="text-light">File added successfully!</h2>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="file"
            ref={fileRef}
            onChange={handleFileChange}
            accept="image/*"
          />
          <Form.Text className="text-light">
            Accepted file types: images (.png, .jpg, .jpeg, .gif)
          </Form.Text>
        </Form.Group>
        <Button variant="dark" size="lg" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
