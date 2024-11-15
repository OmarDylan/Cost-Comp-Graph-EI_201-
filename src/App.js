import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CostComparisonChart = () => {
  const data = [
    { name: 'Insperity', value: 600000 },
    { name: 'ADP', value: 240000 },
    { name: 'Proposed Solution', value: 105495 },
  ];

  return (
    <BarChart width={600} height={400} data={data}>
      <XAxis dataKey="name" />
      <YAxis type="number" domain={[0, 'dataMax']} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default CostComparisonChart;