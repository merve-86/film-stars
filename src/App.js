import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import StarContainer from "./components/stars/StarContainer";




function App() {
  return (
    <Container className="text-center mt-5">
      <Header />
      <StarContainer/>
               
    </Container>
  );
}

export default App;
