import Swal from "sweetalert2";
import { useState, createContext, useCallback } from "react";
import { peticion } from "../helpers/fetch";
import axios from "axios";
export const AuthContext = createContext();


const initialState = {
  uid: null,
  checking: true,
  logged: false,
  idUsuario: 0,
  Especialidad: null,
  Email: "",
  ClienteFrecuente: 0,
  nombres: "",
  apellidos: "",
  telefono: "",

  roles: [],
};

function AuthProvider({ children }) {
  const [log, setlog] = useState(false);
  const [auth, setauth] = useState(initialState);
  let alv = [];

  const submitLogin = async (Correo, Password) => {
    let data = [
      {
        correo: Correo,

        password: Password,
      },
    ];

    console.log(data);

    const url = "http://54.175.3.117:3001/login";
    const resp = await peticion(url, data, "POST");
    console.log(resp);

    if (resp.token !== null) {

        alv = [
          {
            nombre: "Grafica",
            valor: "5",
          }
          
        ];
       localStorage.setItem("token", "sdasdfasdfasdfasdf");
      setauth({
        checking: false,
        logged: true,

       

        roles: alv,
      });

      console.log(auth);
      Swal.fire("Credenciales correctas", "Mensaje:", "info");
    } else {
      Swal.fire("Credenciales Incorrectas", "Mensaje:", "error");
    }
  };

  const verificarToken = useCallback(async () => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("idUsuario");

    const prueba = ""; //await FetchSesion('Sesion','GET')

    if (token === null) {
      return setauth({
        uid: null,
        checking: true,
        logged: false,
      
      });
    } else {
      
      alv = [
        {
          nombre: "Grafica",
          valor: "5",
        }
      ]
    setauth({
      checking: false,
      logged: true,

     

      roles: alv,
    });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        submitLogin,
        auth,
        verificarToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
