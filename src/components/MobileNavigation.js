import NavLinks from "./NavLinks";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

const MobileNavigation = ({ currentLanguage }) => {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <CgMenu
      className="hamburger"
      size="25px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <CgClose
      className="hamburger"
      size="25px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );
  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="mobileNavigation">
      {open ? closeIcon : hamburgerIcon}
      {open && (
        <NavLinks
          currentLanguage={currentLanguage}
          isMobile={true}
          closeMobileMenu={closeMobileMenu}
        />
      )}
    </nav>
  );
};

export default MobileNavigation;
