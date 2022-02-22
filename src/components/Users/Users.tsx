import React from 'react'
import './Users.css';
// import Treble from './user-manage/user-manage/UserListRegular';
import Table from './Table';
const Users = () => {
  return (
    <div className="app__users-container">
      
      <div className="app__users-content">
            <p className="app__users-recent">Recent Requests</p>
            <div>
                {/* <Treble /> */}
                <Table />
            </div>
      </div>
    </div>
  )
}

export default Users
