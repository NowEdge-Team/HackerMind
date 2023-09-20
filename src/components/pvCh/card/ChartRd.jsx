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



function ChartRadar({ bgColor, color, dimension }) {

  const data = {
    labels: ['Compétences', 'moyens techniques', 'ressources financière', 'Accès au SI', 'Temps'],
    datasets: [
      {
        label: 'score par axe',
        data: dimension,
        backgroundColor: bgColor,
        borderColor: color,
        borderWidth: 2,
      },
    ],
  };

  console.log(bgColor, color, dimension);

  return (
    // <Radar data={data} options={{
    //   scales: {
    //     r: {
    //       pointLabels: {
    //       },
    //       ticks: {
    //         display: false // Hides the labels in the middel (numbers)
    //       }
    //     }
    //   },
    //   maintainAspectRatio: false,
    //   plugins: {
    //     legend: {
    //       display: false

    //     }
    //   }
    // }} />

    <Radar data={data}
      width={300}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        }
      }} />

  )
}

export default ChartRadar
