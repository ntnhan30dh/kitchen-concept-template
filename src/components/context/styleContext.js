import React, { useContext } from "react";

const StyleContext = React.createContext();

export const useStyle = () => {
  return useContext(StyleContext);
};



export const StyleProvider = ({children}) => {
  const style = {
    px: '',
    text : {
      action2:" text-sm md:text-base",
      body1:"text-16px md:text-2xl",
      h2: " font-bold text-2xl md:text-40px", 
      h4: "font-bold  text-base md:text-2xl", 
      p: "",
    }

}

  return (
    <StyleContext.Provider value={style}>
        {children}
    </StyleContext.Provider>
  );
};
