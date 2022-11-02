import { useState, useEffect } from "react"
import axios from 'axios';
export const useUsuario = () => {



    const CrearUsuario = async (Username, Correo, Contraseña, ConfirmarContraseña, Foto) => {
        /*
        const { Nombre,Precio,Cantidad,Ubicacion,Categoria,Descripcion,URL } = req.body;
        */

        console.log(Username, Correo, Contraseña, ConfirmarContraseña, Foto)

        const resp = {
            "username": Username, "email": Correo, "password": Contraseña, "password2": ConfirmarContraseña, "files": Foto



        }
        console.log(resp)
     

          const formData = new FormData();

          formData.append("fotoPerfil", Foto);

          formData.append('username', Username);
          formData.append('password', Contraseña);
          formData.append('password2', ConfirmarContraseña);
          formData.append('email', Correo);

        await axios.post('http://app-load-balancer-1185565645.us-east-1.elb.amazonaws.com/api/users/',formData,  {
          headers: {
            "Content-Type": "multipart/form-data",
          }})
            .then(response => {
                console.log("efe?")
                console.log(response)
            });

    }
    const GetProductos = async () => {
        /*
        const { Nombre,Precio,Cantidad,Ubicacion,Categoria,Descripcion,URL } = req.body;
        var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('fotoPerfil', fs.createReadStream('/C:/Users/javil/Downloads/My Funnel(1).png'));
data.append('username', 'Prueba1', {contentType: 'application/json'});
data.append('password', '123', {contentType: 'application/json'});
data.append('password2', '123', {contentType: 'application/json'});
data.append('email', 'prueba@prueba.com', {contentType: 'application/json'});

var config = {
  method: 'post',
  url: 'http://app-load-balancer-1185565645.us-east-1.elb.amazonaws.com/api/users/',
  headers: { 
    'Content-Type': 'application/json', 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
        */




        await axios.get('http://localhost:5000/api_productos/TotalProductos')
            .then(response => {
                console.log(response.data)
    

            }).catch(error => {
                console.log(error)
            })

            ;

    }


    return { CrearUsuario }
}