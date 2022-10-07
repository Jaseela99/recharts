import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer} from "recharts"
const data=[
    {
        name:"2020",
        react:32,
        angular:38
    },
    {
        name:"2021",
        react:39,
        angular:48
    },
    {
        name:"2022",
        react:44,
        angular:58
    },
    {
        name:"2023",
        react:40,
        angular:50
    },
]

const LineCharter=()=>{
    return(
        <ResponsiveContainer width={"100%"} height={400} aspect={2}>
        <LineChart width={400} height={400} data={data} margin={{ top: 10, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="react" stroke="purple" strokeWidth={3} activeDot={{r:4}} />
            <Line type="monotone" dataKey="angular" stroke="blue"/>
            <CartesianGrid stroke="#ccc"/>
            <XAxis dataKey="name"/>
             <YAxis/>
             <Tooltip />
             <Legend/>
            </LineChart>
            </ResponsiveContainer>
    )
}
export default LineCharter