import { createContext, useState } from 'react';

import React from 'react';
import axios from 'axios';

const AppLevelContext = createContext();
const API = 'https://valorant-api.com/v1';

export const AppLevelProvider = ({ children }) => {
   const [agents, setAgents] = useState([]);
   const [maps, setMaps] = useState([]);
   const [weapons, setWeapons] = useState([]);

   const fetchAgents = async () => {
      const response = await axios.get(`${API}/agents`);
      setAgents(response.data.data);
   };

   return (
      <AppLevelContext.Provider value={{ agents, fetchAgents }}>
         {children}
      </AppLevelContext.Provider>
   );
};

export default AppLevelContext;
