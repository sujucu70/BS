
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Pain Principal Identificado', value: 15 },
  { name: 'Métricas Clave Obtenidas', value: 30 },
  { name: 'Champion Validado', value: 50 },
  { name: 'Criterios de Decisión Claros', value: 65 },
  { name: 'Economic Buyer Contactado', value: 85 },
  { name: 'MAP Activo y Acordado', value: 95 },
];

const MeddiccImpactChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
            <BarChart
                layout="vertical"
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 100,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} unit="%" />
                <YAxis dataKey="name" type="category" width={150} tick={{ fontSize: 12 }}/>
                <Tooltip />
                <Legend />
                <Bar dataKey="value" name="Probabilidad de Cierre (%)" fill="#6D84E3" />
            </BarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default MeddiccImpactChart;
