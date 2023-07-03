import React, { createContext, useContext, useState } from 'react';
import {getWindowDimensions} from './ScreenSize'
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ windowDimensions, setWindowDimensions }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
