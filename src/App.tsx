import { Articles } from "./components/Articles";
import { Footer } from "./components/Footer";
import { Introduction } from "./components/Introduction";
import { Navbar } from "./components/Navbar";
import { Persuasion } from "./components/Persuasion";
import { image } from "./images/image";
import './styles/css/easybank.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mockup-phone">
        <img src={image.imageMockups} alt="mobile mockup" className="mockup"/>
      </div>
      <Introduction />
      <Persuasion />
      <Articles />
      <Footer />
    </div>
  );
}


export default App;
