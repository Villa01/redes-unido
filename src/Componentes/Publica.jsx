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
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

import { peticion } from "../helpers/fetch";
import axios from "axios";
export const Publica = () => {
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
  const [publica, Setdesarrollador] = useState([]);
  const [vista, setvista] = useState(1);
  const [file, setFile] = useState();
  const [tipo, setTipo] = useState();
  const [cargandopublica, setcargandopublica] = useState([]);
  const [selectedSize, setSelectedSize] = useState("md");

  const Pagar = async (precio, id) => {
   localStorage.setItem("tipoPago","Servicio")
 
    localStorage.setItem("idpago", id
    );
  
    window.location.replace("/PagosUnicos");
  };

  const { values, handleInputChange } = useForm({});
  const Getpublica = async () => {
    const resp = await peticion(
      "https://grupo16-redes2.ml/api/imagenes",
      "",
      "GET"
    );
    console.log(resp);
    Setdesarrollador(resp.imagenes);
  };

  useEffect(() => {
   Getpublica();
  }, [cargandopublica]);
  return (
    <div>
      <Card>
        <Grid xs={15} justify="center" align="center">
          <NewspaperIcon fontSize="large" color="danger" sx={{ fontSize: 120 }} />
        </Grid>
        <Text
          h1
          size={40}
          css={{
            textGradient: "45deg, black -20%, $blue900 100%",
          }}
          weight="bold"
        >
          Funcion Publica
        </Text>
        
        <Grid.Container gap={4} justify="flex-start">
          {publica.map((item, i) => (
            <>
              <Grid xs={4} sm={4} align="center">
                <Card isPressable css={{ p: "$2", mw: "300px" }}>
                <Card.Header>
                <Card.Image
                  src={item.imagen}
                  alt="efe?"
                  objectFit="cover"
                />
              </Card.Header>
                  <Card.Body css={{ p: 5, justifyItems: "center" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                     
                      <Text
                        h1
                        size={40}
                        css={{
                          width: "1000px",
                          textGradient: "45deg, black -20%, black 100%",
                          padding: "$2 $2",
                        }}
                        weight="bold"
                      >
                        Noticia#{i}
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
