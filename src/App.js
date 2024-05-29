import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { MemProvider } from "./components/MemContext";
import HomePage from "./pages/HomePage";
import HotPage from "./pages/HotPage";
import AddMemeForm from "./pages/AddMemeForm";
import { Navigation } from "./components/Navigation";
import ErrorPage from "./pages/ErrorPage";
import Favorite from "./pages/Favorite";
import ScrollToTop from "./components/ScrollToTop";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <MemProvider>
        <Navigation />
        <ScrollToTop />
        <Container>
          <Routes>
            <Route path="/" element={<Navigate to="/regular" />} />
            <Route path="/regular" element={<HomePage />} />
            <Route path="/hot" element={<HotPage />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/addMeme" element={<AddMemeForm />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Container>
      </MemProvider>
    </BrowserRouter>
  );
}

export default App;
