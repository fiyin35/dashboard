import React from 'react'
import Navbar from '../Navbar/Navbar';
import Request from '../Request/Request';
import Charts from '../Charts/Charts';
import Users from '../Users/Users';
import './Main.css';

const Main = () => {
  return (
    <div className="app__main">
      <Navbar />
        <Request />
        <Charts />
        <Users />
    </div>
  )
}

export default Main
