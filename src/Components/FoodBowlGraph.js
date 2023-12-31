import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const MyFoodChart = ({ weightsData }) => {
  const parsedTime = JSON.parse(weightsData.time_json || '[]');
  const parsedWeights = JSON.parse(weightsData.weights_json || '[]');

  const data = {
    labels: parsedTime,
    datasets: [
      {
        label: 'Weights',
        data: parsedWeights,
        borderColor: '#2d2d2d',
        fill: true, 
        tension: 0.1
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="App">
      <header className='App-header'>
      </header>
      <div className='graph'>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default MyFoodChart;
