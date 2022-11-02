import React, { useMemo ,useEffect, useState} from "react";
import { peticion } from "../helpers/fetch";

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

export default function Euro() {
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
        for (const iterator of resp.desarrollo_euro) {
          labels.push(iterator.year)
          price.push(iterator.precio)
        }

        setAño(year);
        setPrecio(price)
      };
    
      useEffect(() => {
        
        GetDATA();
      }, [cargandodata]);
  const data = useMemo(function () {
    console.log("Prec00io",precio)
    console.log("año",año)
    return {
      datasets: [
        {
          label: "Precio Euro",
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
      <Bar data={data} options={options} />
    </div>
  );
}