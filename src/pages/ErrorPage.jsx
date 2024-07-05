//Component displaying the error page

import { Container, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="my-4">
      <div className="text-center mb-4">
        <Image
          src="/images/Error404.png"
          alt="Error 404"
          fluid
          className="mb-4 rounded"
        />
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Button variant="dark" onClick={() => navigate("/")}>
          Go to Regular
        </Button>
      </div>
    </Container>
  );
};

export default ErrorPage;
