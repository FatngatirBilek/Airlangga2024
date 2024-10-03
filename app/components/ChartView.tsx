"use client";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { color } from "chart.js/helpers";
//import { color } from "chart.js/helpers";
import { Bar, Chart, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
);
const labels = ["Rizal-Askana", "Alif-Embun", "Nayla-Alisha"];
const datasets = [1000, 400, 500];
ChartJS.defaults.font.size = 40;

const ChartView = () => {
  const data = {
    labels: labels,
    datasets: [
      {
        // Title
        // label: labels,
        data: datasets,
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
        ],
    
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
      },
      SubTitle: {
        display: false,
      },
      legend: {
        display: false,
      },
          
        // borderWidth: 7,
        // barPercentage: 1,
        // borderRadius: {
        //   topLeft: 2,
        //   topRight: 2,
        // },
    },
    scales: {
      y: {
        grace: "10%",
        ticks: {
          color: "white",
          steps: 20,
        },
        grid: {
          color: "white",
        },
        title: {
          display: true,
          color: "white",
          text: "Jumlah Siswa",
        },
        display: true,
        beginAtZero: true,
        max: 1700,
      },
      x: {
        ticks: {
          color: "white",
        },
        
        grid: {
          color: "white",
        },
        title: {
          display: false,
          color: "white",
          text: "Nama Paslon",
        },
        display: true,
      },
    },
  };

  const options1 = {
    plugins: {  
      legend: {
        display: false,
      },
      borderWidth: 20,
    },
    title: {
      display: false,
    },
  };
  return (
    
      <div className="flex flex-col justify-beetween md:flex pb-20 ">
        <h1 className="text-center text-5xl font-bold text-white">
        Perolehan Suara Airlangga 2024/2025 👉👈
        </h1>
        <div className="w-full h-[600px] flex justify-center gap-10">
          <Bar className="p-5" data={data} options={options} />
          <Pie className="" data={data} options={options1} />
        </div>
      </div>
    
  );
};

export default ChartView;
