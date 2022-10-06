import React from 'react'
import {BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar} from "recharts"
const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
  ];
const BarCharter = () => {
  return (
    <div>
        <BarChart width={400} height={550} data={data} margin={{top: 5, right: 5, bottom: 5, left: 5 }}>
  <CartesianGrid/>
  <XAxis dataKey="quarter" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="earnings" fill="#8884d8" />
  
</BarChart>
    </div>
  )
}

export default BarCharter