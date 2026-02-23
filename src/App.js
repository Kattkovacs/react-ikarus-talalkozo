import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Event from "./components/Event";
import Location from "./components/Location";
import Program from "./components/Program";
import Approach from "./components/Approach";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RegAndRules from "./components/RegAndRules";
import Collaborators from "./components/Collaborators";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Event />
      <Location />
      <RegAndRules />
      <Program />
      <Approach />
      <Prices />
      <Collaborators />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
