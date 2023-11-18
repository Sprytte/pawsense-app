import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import NavigationBar from './Navbar';

Chart.register(...registerables);

const MyChart = ({weightsData}) => {
  const data = {
    labels: weightsData.time_json || [],
    datasets: [
      {
        label: 'Weights',
        data: weightsData.weights_json || [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
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
        <NavigationBar />
    </header>
    <div>
      <Line data={data} options={options} />
    </div>
    </div>
  );
};
export default MyChart;