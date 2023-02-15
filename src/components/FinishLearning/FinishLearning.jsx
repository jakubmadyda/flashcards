import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Cell, LabelList, Legend, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";
import {capitalize} from "../../helpers/helpers_string";

const colors = ['#EC6B56', '#FFC154', '#47B39C']


function FinishLearning() {
    const [data, setData] = useState([]);
    const {state} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (state === null) {
            navigate('/');
        } else {
            setData(Object.entries(state).map((item) => ({
                name: capitalize(item[0]),
                value: item[1]
            })))
        }
    }, [navigate, state])


    return (
        <div className='mt-3'>
            <h1>You are better than you think!</h1>
            <div style={{'width': '100%', 'height': '50vh'}}>
                <ResponsiveContainer>
                    <PieChart>
                        <Legend verticalAlign="top" height={36}/>
                        <Tooltip cursor={{stroke: 'red', strokeWidth: 1}}/>
                        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={0}
                             fill="#82ca9d">
                            <LabelList dataKey="value" position="top"/>
                            {
                                data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index]}/>
                                ))
                            }
                        </Pie>

                    </PieChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
}

export default FinishLearning;