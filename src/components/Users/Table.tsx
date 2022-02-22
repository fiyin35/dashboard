import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import team1 from '../../assets/avatars/ivana-square.png';
import team2 from '../../assets/avatars/team-2.png';
import team3 from '../../assets/avatars/marie.png';
import team4 from '../../assets/avatars/kal-visuals-square.png';
import arrowRight from '../../assets/arrow_right.png';

import './Users.css';

function createData(
  avatar: any,
  email: string,
  name: string,
  type: string,
  status: string,
  date: string,
  
) {
  return { avatar, email, name, type, status, date,  };
}


const rows = [
  createData(team1, 'michael@mail.com', 'Michael Olu', 'New Agent', 'Pending', '23/04/18' ),
  createData(team2,  'alexa@mail.com', 'Chioma James', 'Account Deactivation', 'Pending', '23/12/20'),
  createData(team3,  'laure@mail.com', 'Boluwatife Ade', 'New User', 'Active', '13/04/19' ),
  createData(team4, 'miriam@mail.com', 'Miriam Eric', 'Email Auth', 'Active', '03/04/21'),
];

export default function AcccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} >
        <TableHead>
          <TableRow>
            <TableCell className="table-head">Name/Email</TableCell>
            <TableCell className="table-head">Type</TableCell>
            <TableCell className="table-head">Status</TableCell>
            <TableCell className="table-head">Date</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <div className="table-name">
                   <div> <img style={{borderRadius: '7px'}} src={row.avatar} alt="avatar"/> </div> 
                   <div className="table-title"> 
                      <div className="tablename">{row.name}</div> <div className="table-email">{row.email}</div> 
                   </div> 
                </div>
              </TableCell>
             <TableCell  className="table-type" >{row.type}</TableCell>
              <TableCell className="table-status"><div className={row.status === 'Pending' ? 'color-pending' : 'color-active'}>{row.status}</div></TableCell>
              <TableCell className="table-date" ><div className="date">{row.date}</div></TableCell>
              <TableCell ><img  src={arrowRight} alt="arrow-right" /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}