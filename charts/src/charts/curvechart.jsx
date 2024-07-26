// CurveChart.js
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CurveChart = () => {
  const [labels, setLabels] = useState(['United States', 'China', 'Germany', 'Japan', 'India', 'United Kingdom', 'France', 'Brazil', 'Italy', 'Canada']);
  const [dataPoints, setDataPoints] = useState([1, 1.8, 2.8, 2.5, 3.0, 1.8, 4.0,5.2,8.2,2.5]);
  const [newLabel, setNewLabel] = useState('');
  const [newDataPoint, setNewDataPoint] = useState('');

  const handleLabelChange = (event) => {
    setNewLabel(event.target.value);
  };

  const handleDataPointChange = (event) => {
    setNewDataPoint(event.target.value);
  };

  const handleAddDataPoint = () => {
    if (newLabel && newDataPoint) {
      setLabels([...labels, newLabel]);
      setDataPoints([...dataPoints, parseFloat(newDataPoint)]);
      setNewLabel('');
      setNewDataPoint('');
    }
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Inflations',
        data: dataPoints,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.4, // This property makes the line curved
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Over Months',
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Inflations',
        },
      },
    },
  };

  return (
    <div >
      <Line data={data} options={options} />
     &nbsp;
      <div>
        <input
          type="text"
          placeholder="Label"
          value={newLabel}
          onChange={handleLabelChange}
        />
        <input
          type="number"
          placeholder="Data Point"
          value={newDataPoint}
          onChange={handleDataPointChange}
        />
        <button onClick={handleAddDataPoint}>Add Data Point</button>
      </div>
      
    </div>
  );
};

export default CurveChart;
