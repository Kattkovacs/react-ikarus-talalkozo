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
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

function App() {
  const currentLanguage = useSelector((state) => state.language);

  return (
    <div>
      <Nav currentLanguage={currentLanguage} />
      <Header currentLanguage={currentLanguage} />
      <Event currentLanguage={currentLanguage} />
      <Registration currentLanguage={currentLanguage} />
      <Rules currentLanguage={currentLanguage} />
      <Program currentLanguage={currentLanguage} />
      <Approach currentLanguage={currentLanguage} />
      <Prices currentLanguage={currentLanguage} />
      <Contact currentLanguage={currentLanguage} />
      <Footer currentLanguage={currentLanguage} />
    </div>
  );
}

export default App;
