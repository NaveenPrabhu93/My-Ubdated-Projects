import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = () => {
  const [labels, setLabels] = useState(['United States', 'China', 'Germany', 'Japan', 'India', 'United Kingdom', 'France',]);
  const [dataPoints, setDataPoints] = useState([100, 59, 80, 81, 56, 55, 40, 100, 50, 20]);
  const navigate = useNavigate();

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
  
    const handlelogin =()=>{
      navigate ('/Logout');
    };
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Top 10 Countries in GDP',
        data: dataPoints,
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 1,
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
        text: 'Chart.js Bar Chart',
      },
    },
  };

  return (
    
    <div className="main-div">
     
      
        <div className="chart-1">
          <h5>BAR CHART</h5>
          <Bar data={data} options={options} />
        </div>
        &nbsp;
  
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
          <Button variant="danger" onClick={handlelogin}>Logout</Button>{' '}
        </div>
      
    </div>
  );
};

export default BarChart;
