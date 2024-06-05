import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { MemProvider } from "./components/MemContext";
import AddMemeForm from "./pages/AddMemeForm";
import { Navigation } from "./components/Navigation";
import ErrorPage from "./pages/ErrorPage";
import ScrollToTop from "./components/ScrollToTop";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MemePage from "./pages/MemePage";

function App() {
  return (
    <BrowserRouter>
      <MemProvider>
        <Navigation />
        <ScrollToTop />
        <Container>
          <Routes>
            <Route path="/" element={<Navigate to="/regular" />} />
            <Route path="/regular" element={<MemePage type="regular" />} />
            <Route path="/hot" element={<MemePage type="hot" />} />
            <Route path="/favorite" element={<MemePage type="favorite" />} />
            <Route path="/addMeme" element={<AddMemeForm />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Container>
      </MemProvider>
    </BrowserRouter>
  );
}

export default App;
