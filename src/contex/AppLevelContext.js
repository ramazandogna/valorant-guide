import { createContext, useState, useEffect, useState } from 'react';

import React from 'react';

const AppLevelContext = createContext();
const API = 'https://valorant-api.com/v1';

const [agents, setAgents] = useState([]);
const [maps, setMaps] = useState([]);
const [weapons, setWeapons] = useState([]);

const fetchAgent = 

export const AppLevelProvider = ({ children }) => {
   return (
      <AppLevelContext.Provider value={{}}>{children}</AppLevelContext.Provider>
   );
};

export default AppLevelContext;
