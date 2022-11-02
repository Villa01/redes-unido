import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";
import { Image } from "@nextui-org/react";
import { peticion } from "../helpers/fetch";
import {
  Input,
  Grid,
  Row,
  Button,
  Text,
  Modal,
  useModal,
  Spacer,
  Card,
} from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../Context/AuthContext";
import TextField from "@mui/material/TextField";
import { useUsuario } from "../hooks/useUsuario";

export const Login = () => {
  const { CrearUsuario } = useUsuario();
  const [file, setFile] = useState();
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const { submitLogin } = useContext(AuthContext);
  const { setVisible, bindings } = useModal();

  const { values, handleInputChange } = useForm({
    ruta: "",
    files: "",
    Username: "",
    Correo: "",
    Contraseña: "",
    ConfirmarContraseña: "",
    User: "",
    Pass: "",
  });

  const handleLogin = (e) => {
    submitLogin(values.Correo, values.Pass);
  };
  const Crear = async () => {
    const data ={

        "user":values.Correo,"pass":values.Pass
    }
    const resp = await peticion(
      "http://54.175.3.117:443/registrar",
      data,
      "POST"
    );
    console.log(resp);
   
  };
  const Bienvenida = (e) => {
    window.location.replace("/Bienvenida")
  };

  useEffect(() => {});
  return (
    <div>
      <div class="Fondoportal">
        <Grid.Container gap={2} justify="center" align="center" bordered={2}>
          <div class="centerCard">
            <Card css={{ p: "$6", mw: "350px" }}>
              <Card.Header>
                <Card.Image
                  src="https://github.com/Juandi22001/Predicas/blob/master/logoUcron.png?raw=true"
                  alt="efe?"
                  objectFit="cover"
                />
              </Card.Header>

              <form id="form">
                <Card.Body
                  css={{ p: 0, justifyItems: "center", zIndex: 1, top: 5 }}
                >
                  <div class="center">
                    <Grid xs={12} sm={24} align="center">
                      <Input
                        bordered
                        labelPlaceholder="Username"
                        color="primary"
                        id="Correo"
                        name="Correo"
                        value={values.Correo}
                        onChange={handleInputChange}
                      />
                    </Grid>

                    <Grid xs={12} sm={24} align="center">
                      <Input
                        id="Pass"
                        type="password"
                        bordered
                        color="primary"
                        placeholder=" Pass"
                        value={values.Pass}
                        name="Pass"
                        onChange={handleInputChange}
                      />
                    </Grid>
                  </div>
                </Card.Body>
                <Row justify="space-around" align="center">
                  <Grid css={{ m: 10 }}>
                    <Button
                      auto
                      ghost
                      color="primary"
                      onClick={() => handleLogin()}
                    >
                      Login
                    </Button>
                  </Grid>
                  <Button
                    auto
                    ghost
                    color="primary"
                    onClick={() => Crear()}
                  >
                    Registrarse
                  </Button>
                  
                </Row>  <Row justify="space-around" align="center">
                <Button
                    auto
                    ghost
                    color="primary"
                    onClick={() => Bienvenida()}
                  >
                    Bienvenida
                  </Button>
                </Row>
                
              </form>
            </Card>
          </div>
        </Grid.Container>
      </div>
    </div>
  );
};
