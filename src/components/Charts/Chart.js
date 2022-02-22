import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
// import Title from './Title';

// Generate Sales Data
function createData(month, value2, value1) {
  return { value1, value2, month };
}

const data = [
  createData(undefined, 30, 15),
  createData('Dec', 50, 25),
  createData('Jan', 40, 25),
  createData('Feb', 40, 40),
  createData('Mar', 90, 25),
  createData('Apr', 40, 40),
  createData('May', 10, 90),
  createData('Jun', 50, 10),
  createData(undefined, 70, 50),
  createData(undefined, 40, 100),
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
