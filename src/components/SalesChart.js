// src/components/SalesChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const SalesChart = ({ data, type, title }) => {
  const chartData = {
    labels: data.map((item) => item[type]),
    datasets: [
      {
        label: 'Sales',
        data: data.map((item) => item.sales),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>{title}</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default SalesChart;
