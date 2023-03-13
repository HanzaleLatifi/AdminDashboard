import React from 'react';
import { PieChart, Pie, Cell ,ResponsiveContainer ,Tooltip,} from 'recharts';

interface dataFormat {
  name: string;
  value: number;
}

interface Props {
  data: dataFormat[];
}

const COLORS = ['#6d28d9', '#f472b6', '#a21caf'];

const CircularChart: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer  minWidth={200} minHeight={200} width={'100%'} height={'100%'} >
        <PieChart >
        <Pie
            isAnimationActive={true}
            data={data}
            labelLine={false}
            outerRadius={70}
            fill="#8884d8"
            dataKey="value"
        >
            {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Tooltip/>
        </PieChart>
    </ResponsiveContainer>
  );
};

export default CircularChart;