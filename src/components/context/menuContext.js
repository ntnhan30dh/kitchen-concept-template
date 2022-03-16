import React, { useState, useContext } from "react";

const MenuContext = React.createContext();
const MenuUpdateContext = React.createContext();

export const useMenu = () => {
  return useContext(MenuContext);
};

export const useMenuUpdate = () => {
  return useContext(MenuUpdateContext);
};

export const MenuProvider = ({children}) => {
  const [menuActive, setmenuActive] = useState(false);

  const toggleMenu = () => {
    setmenuActive(!menuActive);
  };

  return (
    <MenuContext.Provider value={menuActive}>
      <MenuUpdateContext.Provider value={toggleMenu}>
        {children}
      </MenuUpdateContext.Provider>
    </MenuContext.Provider>
  );
};
