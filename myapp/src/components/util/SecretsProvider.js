import React, { useEffect, useState, createContext , useContext } from 'react'

const SecretsContext = createContext();

export function SecretsProvider({children}){
    const [secretsFound, setSecretsFound] = useState(0);
    const progress = secretsFound * 20;
    const [secrets, setSecrets] = useState([0,0,0,0,0]);
    // 0 - stack random color
    // 
    //     

    const handleSecretFound = (idx) => {
        setSecrets((prev) => {
            if (secrets[idx] === 1) return prev; // if already found
            const updatedSecrets = [...prev];
            updatedSecrets[idx] = 1;
            setSecretsFound((prev) => prev + 1);
            return updatedSecrets;
        })
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

