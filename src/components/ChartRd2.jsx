import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);



function ChartRd2({ bgColor, color, dimension }) {

  const data = {
    labels: ['Compétences', 'moyens techniques', 'ressources financière', 'Accès au SI', 'Temps'],
    datasets: [
      {
        label: "dd",
        data: dimension,
        backgroundColor: bgColor,
        borderColor: color,
        borderWidth: 2,
      },
    ],

  };

  console.log(bgColor, color, dimension);

  return (
    <Radar data={data}
      width={100}
      height={50}
      options={{
        scales: {
          r: {
            min: 0,  // Définissez la limite minimale ici
            max: 4, // Définissez la limite maximale ici
          },
        },
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        }
      }} />
  )
}

export default ChartRd2
