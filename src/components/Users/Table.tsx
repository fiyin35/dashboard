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

import './Users.css';

function createData(
  avatar: any,
  email: string,
  name: string,
  type: string,
  status: string,
  date: string,
  protein: number,
) {
  return { avatar, email, name, type, status, date, protein };
}


const rows = [
  createData(team1, 'michael@mail.com', 'Michael Olu', 'New Agent', 'Pending', '23/04/18', 4.0),
  createData(team2,  'alexa@mail.com', 'Chioma James', 'Account Deactivation', 'Pending', '23/12/20', 4.3),
  createData(team3,  'laure@mail.com', 'Boluwatife Ade', 'New User', 'Active', '13/04/19', 6.0),
  createData(team4, 'miriam@mail.com', 'Miriam Eric', 'Email Auth', 'Active', '03/04/21', 6.0),
];

export default function AcccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} >
        <TableHead>
          <TableRow>
            <TableCell className="table-head">Name/Email</TableCell>
            <TableCell className="table-head" align="right">Type</TableCell>
            <TableCell className="table-head"align="right">Status</TableCell>
            <TableCell className="table-head" align="right">Date</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <div><img src={team1} alt="avatar"/> {row.name} {row.email}</div>
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}