import React, { createContext } from 'react';

import {getAuth} from "firebase/auth";
import { app } from '../../Firebase/firebase.config';



export const AuthContext = createContext();
 
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    
   


    const info = {}
    return (
      <div>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>
      </div>
    );
};

export default AuthProvider;