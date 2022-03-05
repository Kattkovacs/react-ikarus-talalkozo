import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Event from "./components/Event";
import Registration from "./components/Registration";
import Rules from "./components/Rules";
import Program from "./components/Program";
import Approach from "./components/Approach";
import Prices from "./components/Prices";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Event />
      <Registration />
      <Rules />
      <Program />
      <Approach />
      <Prices />
      <Contact />
    </div>
  );
}

export default App;
