import React from 'react'
import './Request.css';
import icon_trending_up from '../../assets/icon-trending-up.png';
import icon_trending_down from '../../assets/icon-trending-down.png';
import icon_trending_up_warning from '../../assets/icon-trending-up-warning.png';
import pending from '../../assets/pending.png';
import approve from '../../assets/approve.png';
import total from '../../assets/Total.png'; //
import totalUsers from '../../assets/totalUsers.png';


const Request = () => {
  return (
    <div className="app__request-container">

        <div className="app__request-content">
            <div className="app__request-icon"> 
              <img src={pending} alt="pending" />
            </div>
            <div className="app__request-header">
              <p className="app__request-count"> 1478 286</p>
              <p className="app__request-status"> Pending requests</p>
              <div className="app__request-time-wrapper"> <img src={icon_trending_up} alt="icon" /> <p className="app__percentage">4.07%</p> <p className="app__request-duration"> Last Month</p></div>
            </div>
        </div>

        <div className="app__request-content">
          <div className="app__request-icon"> 
              <img src={approve} alt="approve" />
            </div>
            <div className="app__request-header">
              <p className="app__request-count"> 478 520</p>
              <p className="app__request-status"> Approved requests</p>
              <div className="app__request-time-wrapper"> <img src={icon_trending_up} alt="icon" /> <p className="app__percentage">0.24%</p> <p className="app__request-duration"> Last Month</p></div>
            </div>
        </div>

        <div className="app__request-content">
          <div className="app__request-icon"> 
                <img src={total} alt="total" />
              </div>
              <div className="app__request-header">
                <p className="app__request-count"> 154 872</p>
                <p className="app__request-status"> Total Agents</p>
                <div className="app__request-time-wrapper"> <img src={icon_trending_down} alt="icon" /> <p className="app__percentage">1.64%</p> <p className="app__request-duration"> Last Month</p></div>
              </div>
        </div>

        <div className="app__request-content">
        <div className="app__request-icon"> 
                <img src={totalUsers} alt="totalusers" />
              </div>
              <div className="app__request-header">
                <p className="app__request-count"> 167</p>
                <p className="app__request-status"> Total Users</p>
                <div className="app__request-time-wrapper"> <img src={ icon_trending_up_warning} alt="icon" /> <p className="app__percentage">0.00%</p> <p className="app__request-duration"> Last Month</p></div>
              </div>
        </div>
    </div>
  )
}

export default Request