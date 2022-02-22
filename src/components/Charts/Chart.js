import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
// import Title from './Title';

// Generate Sales Data
function createData(month, value2, value1) {
  return { value1, value2, month };
}

const data = [
  createData(undefined, 0),
  createData('Dec', 25, 30),
  createData('Jan', 50, 60),
  createData('Feb', 25, 80),
  createData('Mar', 70, 63),
  createData('Apr', 20, 40),
  createData('May', 10, 90),
  createData('Jun', 50, 10),
  createData(undefined, 50),
  createData(undefined, 100),
];

export default function Chart() {

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 0,
            right: 16,
            bottom: 90,
            left: 18,
          }}
        >
          <XAxis
            dataKey="month"
            stroke={{
              display: "none",
            }}
            style={{
              color: '#B9B9B9',
              fontSize: '12px',
              fontWeight: 500,
              align: 'center',
              fontFamily: 'Inter'
            }}
          />
          <YAxis
             stroke={{
              display: "none",
            }}
            style={{
              color: '#B9B9B9',
              fontSize: '12px',
              fontWeight: 500,
              align: 'center',
              fontFamily: 'Inter'
            }}
          >
          
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="value2"
            stroke="#5F2EEA"
            strokeWidth={3}
            dot={false}
          />

          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="value1"
            stroke="#4BDE97"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
