//import React, { PureComponent } from 'react';
import {Bar, BarChart, XAxis, YAxis} from 'recharts';
import './Charts.css';


const Barchart = () => {

    const data = [
        {name: 'Jan', value: 900},
        {name: 'Feb', value: 700},
        {name: 'Mar', value: 400},
        {name: 'Apr', value: 1000},
        {name: 'May', value: 800}
    ]

      
      
  return (

    <div className="barchart"> 
        <BarChart
        width={350}
        height={250}
        data={data}
        margin={{
            top: 29,
            right: 30,
            left: 5,
            bottom: 5,
        }}
        barSize={7}
        >
        <XAxis dataKey="name" scale="point" padding={{ left: 15, right: 15 }} />
        <YAxis  />
       
        <Bar 
        dataKey="value" 
        fill="#fff"
         borderRadius={20}
         options={{
             XAxis: {
                 labels: {
                     color: '#fff',
                 }
             }
         }}
         />
        </BarChart>
</div>
  )
}

export default Barchart;
 