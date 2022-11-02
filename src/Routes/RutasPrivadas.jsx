import React from 'react';

import { Routes, Route } from "react-router-dom"
import { Bienvenida } from '../pages/Bienvenida';

import { Login } from '../pages/Login';

export const RutasPrivadas = () => {
    return (

        <div >
            <div >
                <div>
                    <Routes>
                
       
                        <Route  path="/" element={<Bienvenida />} />
             ¿
                        <Route path="*" element={<h>La página no existe</h>} />
                    </Routes>
                </div>
            </div>
        </div>

    );
};