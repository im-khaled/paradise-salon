import React, { createContext, useEffect, useState } from 'react';

export const authProvider = createContext();

const AuthContext = ({children}) => {
     const [services, setServices] = useState([]);

     useEffect(() => {
            fetch('http://localhost:8080/services')
            .then(res => res.json())
            .then(result => setServices(result))
            .catch(error => console.error(error))
     },[])

    
const authInfo = {
    services
}
    return (
        <authProvider.Provider value={authInfo}>
            {children}
        </authProvider.Provider>
    );
};

export default AuthContext;