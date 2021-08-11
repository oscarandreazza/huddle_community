import "bootstrap/dist/css/bootstrap.min.css";
//import { Container } from "react-bootstrap";
import { GlobalStyle } from "./styles/global";
import "./style.css";

import { Header } from "./components/Header/Header";
import { SectionOne } from "./components/SectionOne/SectionOne";
import { SectionTwo } from "./components/SectionTwo/SectionTwo";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <SectionOne />
        <SectionTwo />
      </div>
      <div className="pre-footer"></div>
      <div className="footer-background"></div>
      <div className="wrapper2">
        <Footer />
      </div>

      <GlobalStyle />
    </div>
  );
}
export default App;
