import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";
import {
  Checkbox,
  Grid,
  Card,
  Button,
  Text,
  Input,
  useModal,
  Spacer,
  Modal,
  Row,
} from "@nextui-org/react";
import ComputerIcon from '@mui/icons-material/Computer';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

import { peticion } from "../helpers/fetch";
import axios from "axios";
export const Desarrolladores = () => {
  const servicio = [
    { Servicio: "Baño", Precio: 100 },

    { Servicio: "Corte de pelo ", Precio: 100 },
    { Servicio: "Masaje", Precio: 100 },
    { Servicio: "Corte de Uñas", Precio: 100 },
    { Servicio: "Cepillado", Precio: 100 },
    { Servicio: "Limpiezaa de oidos", Precio: 100 },
  ];
  const { auth } = useContext(AuthContext);
  const { setVisible, bindings } = useModal();
  let desarrolladorAux = [];
  const [desarrolladores, Setdesarrollador] = useState([]);
  const [vista, setvista] = useState(1);
  const [file, setFile] = useState();
  const [tipo, setTipo] = useState();
  const [cargandodesarrolladores, setcargandodesarrolladores] = useState([]);
  const [selectedSize, setSelectedSize] = useState("md");

  const Pagar = async (precio, id) => {
   localStorage.setItem("tipoPago","Servicio")
 
    localStorage.setItem("idpago", id
    );
  
    window.location.replace("/PagosUnicos");
  };

  const { values, handleInputChange } = useForm({});
  const Getdesarrolladores = async () => {
    const resp = await peticion(
      "https://grupo16-redes2.ml/api/datos_desarrolladores",
      "",
      "GET"
    );
    console.log(resp);
    Setdesarrollador(resp.desarrolladores);
  };

  useEffect(() => {
   Getdesarrolladores();
  }, [cargandodesarrolladores]);
  return (
    <div>
      <Card>
        <Grid xs={15} justify="center" align="center">
          <ComputerIcon fontSize="large" color="danger" sx={{ fontSize: 120 }} />
        </Grid>
        <Text
          h1
          size={40}
          css={{
            textGradient: "45deg, black -20%, $blue900 100%",
          }}
          weight="bold"
        >
          Desarrolladores
        </Text>
        
        <Grid.Container gap={4} justify="flex-start">
          {desarrolladores.map((item, i) => (
            <>
              <Grid xs={4} sm={4} align="center">
                <Card isPressable css={{ p: "$2", mw: "300px" }}>
                  <Card.Body css={{ p: 5, justifyItems: "center" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                      <Grid xs={15} justify="" align="center">
                        <ComputerIcon
                          fontSize="large"
                          color="black"
                          sx={{ fontSize: 80 }}
                        />
                      </Grid>
                      <Text
                        h1
                        size={20}
                        css={{
                          width: "1000px",
                          textGradient: "45deg, black -20%, black 100%",
                          padding: "$2 $2",
                        }}
                        weight="bold"
                      >
                        Nombre
                      </Text>

                      <Text
                        h1
                        size={15}
                        css={{
                          width: "1000px",
                          textGradient:
                            "45deg, $blue600 -20%, $blue600 100%",
                          padding: "$2 $2",
                        }}
                        weight="bold"
                      >
                        {item.nombre}
                      </Text>
                      <Text
                        h1
                        size={20}
                        css={{
                          width: "1000px",
                          textGradient: "45deg, black -20%, black 100%",
                          padding: "$2 $2",
                        }}
                        weight="bold"
                      >
                        carnet
                      </Text>

                      <Text
                        h1
                        size={15}
                        css={{
                          width: "1000px",
                          textGradient:
                            "45deg, $blue600 -20%, $blue600 100%",
                          padding: "$2 $2",
                        }}
                        weight="bold"
                      >
                        {item.carnet}
                      </Text>
                     
                    </Row>
                  </Card.Body>
                </Card>
              </Grid>
            </>
          ))}
        </Grid.Container>
      </Card>
    </div>
  );
};
