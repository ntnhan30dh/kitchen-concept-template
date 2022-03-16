import React, { useContext } from "react";

const StyleContext = React.createContext();

export const useStyle = () => {
  return useContext(StyleContext);
};



export const StyleProvider = ({children}) => {
  const style = {
    px: 'px-1/10',
    text : {
      h2: "text-4xl md:text-6xl lg:text-8xl", 
      p: "text-lg md:text-xl lg:text-2xl",
    }

}

  return (
    <StyleContext.Provider value={style}>
        {children}
    </StyleContext.Provider>
  );
};
