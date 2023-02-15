import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {PieChart, Pie, ResponsiveContainer, Cell, LabelList, Legend, Tooltip} from "recharts";

const colors = ['#F47A1F', '#00529B', '#377B2B']

function FinishLearning() {
    const [data, setData] = useState([
        {
            name: 'Good',
            value: 7
        },
        {
            name: 'Not Bad',
            value: 2
        },
        {
            name: 'Very Bad',
            value: 3
        }
    ])
    const {state} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (state === null) {
            // navigate('/')
        }

        setData()
    }, [navigate, state])


    return (
        <div className='mt-3'>
            <h1>You are better than you think!</h1>
            <div style={{'width': '100%', 'height': '100vh'}}>
                <ResponsiveContainer>
                    <PieChart>
                        <Legend verticalAlign="top" height={36}/>
                        <Tooltip cursor={{stroke: "red", strokeWidth: 2}}/>
                        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={0}
                             fill="#82ca9d">
                            <LabelList dataKey="value" position="top" />
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index]}/>
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default FinishLearning;