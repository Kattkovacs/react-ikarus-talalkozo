import NavLinks from "./NavLinks";

const Navigation = ({ currentLanguage }) => {
  return (
    <nav className="navigation">
      <NavLinks currentLanguage={currentLanguage} />
    </nav>
  );
};

export default Navigation;
