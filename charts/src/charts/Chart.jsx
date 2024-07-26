import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import BarChart from './BarChart';
import Button from 'react-bootstrap/Button';
import chart from './chart.css';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
  const [labels, setLabels] = useState(['United States', 'China', 'Germany', 'Japan', 'India', 'United Kingdom', 'France', ]);
  const [dataPoints, setDataPoints] = useState([100, 59, 80, 81, 56, 55, 40, 100, 50, 20]);

  const handleLabelChange = (event, index) => {
    const newLabels = [...labels];
    newLabels[index] = event.target.value;
    setLabels(newLabels);
  };

  const handleDataChange = (event, index) => {
    const newDataPoints = [...dataPoints];
    newDataPoints[index] = parseFloat(event.target.value);
    setDataPoints(newDataPoints);
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Top 10 Countries in GDP',
        data: dataPoints,
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'orange',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  return (
    
    <div className="main-div">
      
     <div className='title'>
      <center>
     <h5>DATA VISUALIZATION CHARTS </h5> 
    
     </center>
     </div>
     <div>
     <Button variant="danger">Logout</Button>{' '}
     </div>
      
        <div className="chart-1">
        <h5>LINE CHART </h5>
          <center>
          
          </center>
          <Line data={data} options={options} />
        </div>
       
        <div className="input-form">
          <h5>Update Chart Data</h5>
          {labels.map((label, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <input
                type="text"
                value={label}
                onChange={(e) => handleLabelChange(e, index)}
                placeholder={`Label ${index + 1}`}
                style={{ marginRight: '10px' }}
              />
              <input
                type="number"
                value={dataPoints[index]}
                onChange={(e) => handleDataChange(e, index)}
                placeholder={`Data ${index + 1}`}
              />
            </div>
          ))}
        </div>
      <BarChart/>
    </div>
  );
};

export default LineChart;
