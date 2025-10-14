
import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Lead (MQL)', volume: 100 },
    { name: 'Discovery', volume: 60, conversion: 60 },
    { name: 'Fit & Viabilidad', volume: 35, conversion: 58 },
    { name: 'Solución & Demo', volume: 20, conversion: 57 },
    { name: 'Propuesta', volume: 12, conversion: 60 },
    { name: 'Negociación', volume: 8, conversion: 67 },
];

const PipelineHealthChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" tick={{ fontSize: 10 }}/>
          <YAxis yAxisId="left" label={{ value: 'Nº de Oportunidades', angle: -90, position: 'insideLeft' }} />
          <YAxis yAxisId="right" orientation="right" domain={[0, 100]} unit="%" label={{ value: 'Tasa de Conversión (%)', angle: 90, position: 'insideRight' }} />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="volume" name="Nº de Oportunidades" barSize={20} fill="#a0aec0" />
          <Line yAxisId="right" type="monotone" dataKey="conversion" name="Tasa de Conversión (%)" stroke="#6D84E3" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PipelineHealthChart;
