import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import { AuthContext } from '../Context/AuthContext';
import { Bienvenida } from '../pages/Bienvenida';
import { Login } from '../pages/Login';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRouter';
import { PublicRoute } from './PublicRouter';
import { RutasPrivadas } from './RutasPrivadas';


export const AppRouter = () => {


    const { auth, verificarToken } = useContext(AuthContext);

    useEffect(() => {

        verificarToken();


    }, [verificarToken]);



    return (
        <Router>
            <Routes>

        
                
                  <Route path="/" element={<Bienvenida/>} />
            
             
 
                  <Route path="*" element={<h>La página no existe</h>} />
               
                
         
            </Routes>
        </Router>
    );
};