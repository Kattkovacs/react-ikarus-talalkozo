import "./App.css";
import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header";
import Event from "./components/sections/Event";
import Location from "./components/sections/Location";
import Program from "./components/sections/Program";
import Approach from "./components/sections/Approach";
import Prices from "./components/sections/Prices";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import RegAndRules from "./components/sections/RegAndRules";
import Collaborators from "./components/sections/Collaborators";

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
