"use client"
import React, { createContext, useState } from 'react';


interface GlobalState {
    user: string; // Replace 'User' with your user data structure (replaced with string)
    updateState: (userData: Partial<string>) => void; // Replace 'User' with your user data structure
  }
  
  // Initial state
const GlobalStateContext = createContext<GlobalState | null>(null);

export const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string>("Test context");

  const updateState = (newState: Partial<string>) => {
    setUser(newState);
  }

  const contextState: GlobalState = {
    user,
    updateState,
  }

  return (
    <GlobalStateContext.Provider value={contextState}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateContext;