import React from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area , ResponsiveContainer } from 'recharts';

interface Props {
  data: Array<{ name: string; value: number }> ,
  activeColor:string |undefined
}

const AreaChartComponent: React.FC<Props> = ({ data , activeColor}) => {
  return (
                <ResponsiveContainer>
                    <AreaChart  data={data}  >
                    <XAxis dataKey="name" />
                    <YAxis markerWidth={10} />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#8884d8" fill={activeColor} />
                    </AreaChart>
                 </ResponsiveContainer>
            
       );
};

export default AreaChartComponent;

  
