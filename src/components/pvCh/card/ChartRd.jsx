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



function ChartRadar({bgColor,color,dimension}) {

  const data ={
    labels: ['Compétences', 'moyens techniques', 'ressources financière', 'Accès au SI', 'Temps'],
    datasets: [
      {
        label: 'score par axe',
        data:dimension,
        backgroundColor:bgColor,
        borderColor:color,
        borderWidth: 2,
      },
    ],
  };

  console.log(bgColor,color,dimension);

  return (
    <div>
      <div style={{width:"280px"}}>
        <Radar data={data} /> 
      </div>
    </div>
  )
}

export default ChartRadar
