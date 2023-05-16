// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Missions.scss';
import { auto } from '@popperjs/core';

function createData(mission, description, status, option) {
  return { mission, description, status, option };
}

const rows = [
  createData('Thaicom', 'Thaicom is a satellite operator company that provides satellite-based communication and broadcasting services in Asia and Africa. Its mission is to connect people, businesses, and organizations with reliable and innovative satellite solutions. Thaicom aims to deliver high-quality and cost-effective satellite services to its customers and improve the connectivity and communication infrastructure in the regions it operates in', 'not a member', 'Join Mission'),
  createData('Thaicom', 'Thaicom is a satellite operator company that provides satellite-based communication and broadcasting services in Asia and Africa. Its mission is to connect people, businesses, and organizations with reliable and innovative satellite solutions. Thaicom aims to deliver high-quality and cost-effective satellite services to its customers and improve the connectivity and communication infrastructure in the regions it operates in', 'not a member', 'Join Mission'),
  createData('Thaicom', 'Thaicom is a satellite operator company that provides satellite-based communication and broadcasting services in Asia and Africa. Its mission is to connect people, businesses, and organizations with reliable and innovative satellite solutions. Thaicom aims to deliver high-quality and cost-effective satellite services to its customers and improve the connectivity and communication infrastructure in the regions it operates in', 'not a member', 'Join Mission'),
  createData('Thaicom', 'Thaicom is a satellite operator company that provides satellite-based communication and broadcasting services in Asia and Africa. Its mission is to connect people, businesses, and organizations with reliable and innovative satellite solutions. Thaicom aims to deliver high-quality and cost-effective satellite services to its customers and improve the connectivity and communication infrastructure in the regions it operates in', 'not a member', 'Join Mission'),
  createData('Thaicom', 'Thaicom is a satellite operator company that provides satellite-based communication and broadcasting services in Asia and Africa. Its mission is to connect people, businesses, and organizations with reliable and innovative satellite solutions. Thaicom aims to deliver high-quality and cost-effective satellite services to its customers and improve the connectivity and communication infrastructure in the regions it operates in', 'not a member', 'Join Mission'),

];

const Missions = () => {
  return (
    <TableContainer className='table-container' component={Paper}>
      <Table className='table' aria-label="simple table" sx={{ margin: auto, padding: auto }}>
        <TableHead>
          <TableRow>
            <TableCell className='mission-name'>Mission</TableCell>
            <TableCell className='mission-desc'>Description</TableCell>
            <TableCell className='mission-status'>Status</TableCell>
            <TableCell className='mission-option'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.mission}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.mission}
              </TableCell>
              <TableCell><p>{row.description}</p></TableCell>
              <TableCell><h3>{row.status}</h3></TableCell>
              <TableCell><button>{row.option}</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Missions;
