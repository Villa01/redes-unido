import { useForm } from "../hooks/useForm";

import {
  Input,
  Grid,
  Row,
  Button,
  Text,
  Link,
  Modal,
  useModal,
  Spacer,
} from "@nextui-org/react";
import Euro from "../Componentes/Euro";
import { Home } from "../Componentes/Home";
import { useContext, useEffect, useState } from "react";
import { Administradores } from "../Componentes/Administradores";
import { AuthContext } from "../Context/AuthContext";
import { Desarrolladores } from "../Componentes/Desarrolladores";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Publica } from "../Componentes/Publica";

import BarChart from "../Componentes/Barchart";
export const Bienvenida = () => {
  const [pestañasTotales, setPestañasTotales] = useState([]);
  const { auth } = useContext(AuthContext);

  const [cargarPestaña] = useState(false);

  const [bienvenida, setBienvenida] = useState(false);
  const [ruta, setUrl] = useState("");
  //  const {LLenarPestaña, pestañasTotales } = Pestaña()
  const [value, setValue] = useState("1");
  const [page, setPage] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let alv = [
    {
      nombre: "Inicio",
      valor: "1",
    },
    {
      nombre: "Administradores",
      valor: "2",
    },
    {
      nombre: "Desarrolladores",
      valor: "3",
    },
    {
      nombre: "Funcion Publica",
      valor: "4",
    },
  ];
  const borrar = () => {};
  const [selectedSize, setSelectedSize] = useState("md");

  const { values, handleInputChange } = useForm({
    pagina: 0,

    ruta: "",
  });
  useEffect(() => {
    setPestañasTotales(alv);

    //  console.log(auth.roles)
    const url = process.env.URL;
    setUrl(url);

    console.log("PESTAÑAS", pestañasTotales);
  }, [cargarPestaña]);

  function set() {
    setBienvenida(true);
  }

  return (
    <div class="MenuPortal">
      <Grid.Container gap={1} justify="flex-start">
        <Grid xs={12} sm={12} align="center">
          <Box
            sx={{
              width: "2000px",
              padding: "20px",
              height: 800,
              typography: "body1",
            }}
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  sx={{
                    width: "1200px",
                    padding: "0px",
                    height: 0,
                    typography: "body1",
                    margin: "auto",
                  }}
                  indicatorColor="black"
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  {pestañasTotales.map((item, i) => (
                    <Tab label={item.nombre} value={item.valor} />
                  ))}
                </TabList>
              </Box>

              <TabPanel value="1">
                {" "}
                <Text
                  h1
                  size={20}
                  css={{
                    textGradient: "45deg, black -20%, $blue900 100%",
                  }}
                  weight="bold"
                >
                  server={ruta}
                </Text>
                <Home></Home>
              </TabPanel>
              <TabPanel value="2">
                {" "}
                <Text
                  h1
                  size={20}
                  css={{
                    textGradient: "45deg, black -20%, $blue900 100%",
                  }}
                  weight="bold"
                >
                  server={ruta}
                </Text>
                <Administradores></Administradores>
              </TabPanel>
              <TabPanel value="3">
                {" "}
                <Text
                  h1
                  size={20}
                  css={{
                    textGradient: "45deg, black -20%, $blue900 100%",
                  }}
                  weight="bold"
                >
                  server={ruta}
                </Text>
                <Desarrolladores></Desarrolladores>
              </TabPanel>

              <TabPanel value="4">
                {" "}
                <Text
                  h1
                  size={20}
                  css={{
                    textGradient: "45deg, black -20%, $blue900 100%",
                  }}
                  weight="bold"
                >
                  server={ruta}
                </Text>
                <Publica></Publica>
              </TabPanel>
              <TabPanel value="5">
                {" "}
                <Text
                  h1
                  size={20}
                  css={{
                    textGradient: "45deg, black -20%, $blue900 100%",
                  }}
                  weight="bold"
                >
                  server={ruta}
                </Text>
                <BarChart></BarChart>
                <Euro></Euro>
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid.Container>
    </div>
  );
};
