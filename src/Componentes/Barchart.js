import React, { useMemo ,useEffect, useState} from "react";
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
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const scores = [6, 5, 5, 5, 3, 4, 6, 4, 5];
const labels = [2010, 2011, 2012, 2013, 2014, 2015, 2016,2017,2018,2019,2020,2021,2022];

const options = {
  fill: true,
  animations: false,
  scales: {
    y: {
      min: 0,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};

export default function BarChart() {
    const [dat, Setdata] = useState([]);
    const [cargandodata, setcargandodata] = useState([]);
    const [precio, setPrecio] = useState([]);
    const [año, setAño] = useState([]);
    const GetDATA = async () => {
        const resp = await peticion(
          "https://grupo16-redes2.ml/api/desarrollo_economico",
          "",
          "GET"
        );
        

        let year=[]
        let price=[]

        console.log(resp)
        Setdata(resp.desarrollo_dolar)
        for (const iterator of resp.desarrollo_dolar) {
          year.push(iterator.year)
          price.push(iterator.precio)
        }

        setAño(year);
        console.log("AÑOOO",año)
        setPrecio(price)
        console.log("PRECIO",precio)
      };
    
      useEffect(() => {
        GetDATA();
      }, [cargandodata]);
 
      const data = useMemo(function () {
   
    console.log(dat)
    return {
      datasets: [
        {
          label: "Precio  Dolar",
          tension: 0.6,
          data: precio,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.3)",
        },
      ],
      labels,
    };
  }, []);

  return (
    <div className="App">
      <Button
                    auto
                    ghost
                    color="primary"
                    onClick={() => GetDATA()}
                  >
                    Ver
                  </Button>
      <Bar data={data} options={options} />
    </div>
  );
}