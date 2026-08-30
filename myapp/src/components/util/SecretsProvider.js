import React, { useEffect, useState, createContext , useContext } from 'react'

const SecretsContext = createContext();

export function SecretsProvider({children}){
    const [secretsFound, setSecretsFound] = useState(0);
    const progress = secretsFound * 20;

    const handleSecretFound = () => {
        setSecretsFound((prev) => prev + 1);
    };

    return(
        <SecretsContext.Provider value={{secretsFound, progress, handleSecretFound}}>
            {children}
        </SecretsContext.Provider>
    );
}

export function useSecrets() {
  return useContext(SecretsContext);
}