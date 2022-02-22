import React from 'react'
import './Charts.css';
import rectangle1 from '../../assets/Rectangle1.png'
import rectangle2 from '../../assets/Rectangle2.png'

import Chart from './Chart';
import BarChart from './Barchart'
// import Chartt from './Chartt';


const Charts = () => {
  return (
    <div className="app__chart-container">
      
      <div className="app__chart-stat">

          <div className="app__chart-content"> 
             <div className="app__chart-inflo"> 
               <p className="app__chart-paragraph">User Inflow Statistics</p>
             </div>

             <div className="app__chart-agents"> 
                 <div className="app__chart-agents">
                    <img className="rectangle" src={rectangle1} alt="rectangle"/>
                    <p className="app__chart-list agents">AGENTS</p>
                 </div>
                
                 <div className="app__chart-agents">
                   <img className="rectangle" src={rectangle2} alt="rectangle"/>
                   <p className="app__chart-list users">USERS</p>
                   </div>
             </div>
          </div>

          <div className="app__chart-data"> 
            <p className="app__chart-month">Nov - July</p>
            <div className="app__chart-agent-align">
              <p className="app__chart-agent-stat">475 273</p>
              <p className="app__chart-agent-stat">782 396</p>
            </div>
          </div> 

            <Chart /> 

      </div>

      <div className="app__chart-barchart">
              <div className="app__chart-barchart-bar">
                  <BarChart />
                </div> 

              <div className="app__chart-barchart-text">
                <div className="app__chart-barchart-text-top"> 
                    <p className="NewUsers">New Users</p>
                  </div> 

                  <div className="app__chart-barchart-text-down">
                    <p className="percentage">(+23%)</p>
                    <p className="lastweek">than last week</p>
                  </div>
              </div>
      </div>

    </div>
  )
}

export default Charts
